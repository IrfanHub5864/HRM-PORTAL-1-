import React from "react";
//import SidebarNavigation from "../components/SidebarNavigation";
import TopHeader from "../components/TopHeader";
import DashboardStatsCards from "../components/DashboardStatsCards";
import AttendanceWidget from "../components/AttendanceWidget";
import EmployeeActivityChart from "../components/EmployeeActivityChart";

function ManagerDashboard(){

return(

<div className="dashboardLayout">

<div className="mainContent">

<TopHeader/>

<DashboardStatsCards/>

{/* Attendance + Weekly Activity Row */}

<div className="dashboardRow">

<AttendanceWidget/>

<EmployeeActivityChart/>

</div>

</div>

</div>

)

}

export default ManagerDashboard;