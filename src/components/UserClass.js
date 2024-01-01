import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>{location}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
