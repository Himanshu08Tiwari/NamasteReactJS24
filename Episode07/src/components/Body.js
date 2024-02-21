import ResturantCard from "./ResturantCard";
import Shimmar from "./Shimmar";
import { SWIGGY_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    console.log(json);

    const checkingJsonData = async (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
        const checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }
      }
    };

    const getData = await checkingJsonData(json);
    setResturantList(getData);
    setfilList(getData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (filList.length == 0) {
    return <Shimmar />;
  }

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
              setfilList(filteredData);
            }}
          >
            Search
          </button>
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
      </div>

      <div className="card-container">
        {filList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
