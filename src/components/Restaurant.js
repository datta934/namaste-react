import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="rest-card">
      <img
        src={
          CDN_URL +
          resData.data.cloudinaryImageId
        }
        height={200}
        width="100%"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating}stars</h4>
      <h4>{resData.data.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;