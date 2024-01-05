import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <UserContext.Consumer>
        {(data)=>{console.log(data)}}
      </UserContext.Consumer>
      <User name={"Mauaa Datta"} />

      <UserClass location={"India"} />
    </div>
  );
};

export default About;
