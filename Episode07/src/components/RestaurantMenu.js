import Shimmar from "./Shimmar";
import star from "../utils/star.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_URL, ITEM_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [ResInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resMenu = await fetch(MENU_URL + id);
    const jsonMenu = await resMenu.json();

    console.log(jsonMenu);
    setResInfo(jsonMenu);
  };

  if (ResInfo == null) {
    return <Shimmar />;
  }
  const { name, cuisines, locality, sla, avgRating, costForTwoMessage } =
    ResInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="resMenu-container">
      <div className="res-data">
        <div className="res-data-head">
          <div className="head-left">
            <div className="head-left-top">
              <h2>{name}</h2>
              <h5>{cuisines.join(", ")}</h5>
              <h5>
                {locality}, {sla.lastMileTravelString}
              </h5>
            </div>

            <div className="head-left-bottom">
              <h4>{sla.deliveryTime} MINS</h4>
              <h4>{costForTwoMessage}</h4>
            </div>
          </div>
          <div className="head-right">
            <div className="star-imgCont">
              <img src={star} className="star-img"></img>
            </div>
            <h3>{avgRating}</h3>
          </div>
        </div>

        <div className="res-data-menu">
          <div className="menu-title">
            <h3>Recommended</h3>
          </div>
          {itemCards.map((item) => (
            <div className="menu-list-detail" key={item?.card?.info?.id}>
              <div className="list-detail-left">
                <h4>{item?.card?.info?.name}</h4>
                <h5>Rs. {item?.card?.info?.price / 100}</h5>
              </div>
              <div className="list-detail-right">
                <div className="item-img-box">
                  <img
                    src={ITEM_IMG_URL + item?.card?.info?.imageId}
                    className="fooditem-img"
                  ></img>
                </div>
                <button className="fooditem-btn">Add +</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
