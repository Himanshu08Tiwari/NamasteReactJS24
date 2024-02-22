import star from "../utils/star.png";
import { IMG_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="rescard-imgcntr">
        <img src={IMG_URL + cloudinaryImageId}></img>
      </div>
      <div className="rescard-detail">
        <h4 className="shop-name">{name}</h4>
        <h5 className="food-item">{cuisines.join(", ")}</h5>
        <div className="detail-box">
          <div className="rating-detail">
            <div className="star-img-box">
              <img src={star} className="star-img"></img>
            </div>

            <h4>{avgRating}</h4>
          </div>

          <div className="offer-detail">{costForTwo}</div>
        </div>
        <h5 className="delivey-time">{sla.deliveryTime} Minutes</h5>
      </div>
    </div>
  );
};

export default ResturantCard;
