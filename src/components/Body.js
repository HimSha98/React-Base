import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {

    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  }

  return listOfRestaurants.length === 0 ? < Shimmer /> : 
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(searchText);
                const filteredRest = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setListOfRestaurants(filteredRest);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 3.5);
              setFilteredRestaurants(filteredList);
              console.log(filteredList);
            }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        <div className="res-container">
          {/* Restaurant Card Container */}
          {
            filteredRestaurants.map(( restaurant ) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
          }
        </div>
      </div>
    )
};

export default Body;