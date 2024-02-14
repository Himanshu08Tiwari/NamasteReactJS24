import ResturantCard from "./ResturantCard";
import resList from "../utils/appData";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [ResturantList, setResturantList] = useState(resList);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="body">
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search your Favourite Shop..."
            id="searchText"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredData = filterData(searchText, ResturantList);
              setResturantList(filteredData);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <button
        className="filter"
        onClick={() => {
          const filterList = ResturantList.filter(
            (resturant) => resturant.data.avgRating > 4
          );
          setResturantList(filterList);
        }}
      >
        Top Rated Resturant
      </button>
      <div className="card-container">
        {ResturantList.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
