import React from "react";
import "../styles/managerPanel.css";

function TopHeader(){

return(

<div className="topHeader">

<h2>Manager Dashboard</h2>

<div className="headerRight">

<span className="notification">🔔</span>

<div className="profileMenu">

<img
src="https://i.pravatar.cc/40"
alt="profile"
/>

<span>Manager</span>

</div>

</div>

</div>

)

}

export default TopHeader