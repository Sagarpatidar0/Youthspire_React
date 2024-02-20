import Menu from "./Menu"
import { useState } from "react";
import "./profile.css"
import ToggleButton from "react-toggle-button";
import EditProfile from "./EditProfile";

function Profile() {
    const [value, setValue] = useState(false);
    return (
    <>
    <div className="profile-nav">
        <div className="y-logo nav-item">
            <img src="images/title/6-removebg-preview (1).png" alt="" />
        </div>
        <div className="youth-logo nav-item">
            <img src="images/youthlogo.png" alt="" />
        </div>
        <div className="profile-logo nav-item">
            <img src="images/profilelogo.png" alt="" />
        </div>
    </div>
    {/* <div className="peofile-content">
        welcome berldev3
    </div> */}
        <Menu/>
        <EditProfile/>
    <button className="theme-btn">
    <ToggleButton
            inactiveLabel="Dark"
            activeLabel="Light"
            value={value}
            onToggle={() => {
              setValue((prevValue) => !prevValue);
            }}
          />
    </button>
    </>
  )
}

export default Profile