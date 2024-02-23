import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "dummy",
        followers: null,
        following: null,
        Id: 0,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Himanshu08Tiwari");
    const json = await data.json();

    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { name, id, followers, following, avatar_url } = this.state.userInfo;
    return (
      <div className="aboutus-container">
        <h1 className="about-us">About Us</h1>

        <div className="user-container">
          <div className="user-img-box">
            <img src={avatar_url} className="user-img"></img>
          </div>
          <div>
            <h3>User: {name}</h3>
            <h4>Id: {id}</h4>
            <h4>Followers: {followers}</h4>
            <h4>Following: {following}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
