import RestaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //State variable
let [listofRestaurants, setListofRestaurant] = useState(resObj)
console.log(listofRestaurants)
  return (
    <div className="body">
      <div className="filter">
        <button type="button"
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
