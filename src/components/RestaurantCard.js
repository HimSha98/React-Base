import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + resData?.info?.cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <div>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;