import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SidebarNavigation() {

return (

<div className="sidebar">

<h2 className="logo">HRM</h2>

<ul>

<li>
<NavLink to="/" className="navItem">
 Dashboard
</NavLink>
</li>

<li>
<NavLink to="/employees" className="navItem">
 Employees
</NavLink>
</li>

<li>
<NavLink to="/assets" className="navItem">
 Asset Management
</NavLink>
</li>

<li>
<NavLink to="/attendance" className="navItem">
 Attendance
</NavLink>
</li>

<li>
<NavLink to="/attendance-report" className="navItem">
 Attendance Report
</NavLink>
</li>

<li>
<NavLink to="/appreciations" className="navItem">
 Appreciations
</NavLink>
</li>


<li>
<NavLink to="/finance" className="navItem">
 Finance
</NavLink>
</li>



<li>
<NavLink to="/leaves" className="navItem">
 Leaves
</NavLink>
</li>

<li>
<NavLink to="/payroll" className="navItem">
 Payroll
</NavLink>
</li>


<li>
<NavLink to="/policies" className="navItem">
 Company Policies
</NavLink>
</li>

<li>
<NavLink to="/offboardings" className="navItem">
 Offboardings
</NavLink>
</li>





</ul>

</div>

)

}

export default SidebarNavigation;