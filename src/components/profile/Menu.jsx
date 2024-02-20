import "./profile.css";
import { useState } from "react";
import ToggleButton from "react-toggle-button";

function Menu() {
  const [value, setValue] = useState(false);
  return (
    <div className="profile-menu">
      <div className="top">
        <img className="top-logo" src="images/profilelogo.png" alt="" />

        <div className="top-content">
          <div className="username">@berldev3</div>
          <div className="useremail">berldev3@gmail.com</div>
        </div>
      </div>
      <div className="center">
        <ul className="clist">
          <li className="clist-item">HOME</li>
          <li className="clist-item">EDIT PROFILE</li>
          <li className="clist-item comingsoon">
            EXPLORE <span>Coming Soon</span>
          </li>
          <li className="clist-item comingsoon">
            STORE <span>Coming Soon</span>
          </li>
          <li className="clist-item comingsoon">
            EVENTS <span>Coming Soon</span>
          </li>
          <li className="clist-item">MY INVENTORY</li>
        </ul>
      </div>
      <div className="bottom">
        <div className="social-icon">
          <i className="fa-brands fa-telegram fa-2xl" />
          <i className="fa-brands fa-facebook fa-2xl" />
          <i className="fa-brands fa-x-twitter fa-2xl" />
          <i className="fa-brands fa-instagram fa-2xl" />
          <i className="fa-brands fa-discord fa-2xl" />
        </div>
        <div className="newsletter">
          <div className="newsletter-head">NEWS LETTER</div>
          <ToggleButton
            className="custom-classname"
            value={value}
            onToggle={() => {
              setValue((prevValue) => !prevValue);
            }}
          />
          <div className="subscribe">Subscribed</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
