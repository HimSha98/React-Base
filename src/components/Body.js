import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

  const [list, setList] = useState(resList);

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