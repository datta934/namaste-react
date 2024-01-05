import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="rest-card">
      <img
        src={CDN_URL + resData.info.cloudinaryImageId}
        height={200}
        width="100%"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}stars</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h3>Promoted</h3>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
