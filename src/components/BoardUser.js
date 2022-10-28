import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import BackgroundImage from "../Images/img0.jpg"

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header style={ HeaderStyle }>
        <div className="jumbotron">
        <h3>Click on Menu and Book your Room</h3>
        <Link to="/middle2">
                    <button className="primary-button" float ="center">MENU</button>
                </Link>
                </div>
      </header>
      
    </div>
  );
};
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default BoardUser;
