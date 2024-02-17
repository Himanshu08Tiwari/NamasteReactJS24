import ResturantCard from "./ResturantCard";
import Shimmar from "./Shimmar";
import resList from "../utils/appData";
import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [ResturantList, setResturantList] = useState([]);
  const [filList, setfilList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filList.length == 0 ? (
    <Shimmar />
  ) : (
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
              setfilList(filteredData);
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
            (resturant) => resturant.info.avgRating > 4
          );
          setfilList(filterList);
        }}
      >
        Top Rated Resturant
      </button>
      <div className="card-container">
        {filList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
