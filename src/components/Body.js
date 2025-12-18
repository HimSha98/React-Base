import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {

    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();

    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]);
  }

  if (list.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={() => {
          const filteredList = list.filter((res) => res.info.avgRating > 3.5);
          setList(filteredList);
          console.log(filteredList);
        }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card Container */}
        {
          list.map(( restaurant ) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;