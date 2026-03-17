import React from "react";
//import SidebarNavigation from "../components/SidebarNavigation";
import "../styles/managerPanel.css";

function AttendanceReport() {

const reports = [
{
id:1,
employee:"Thahaseen Gulam",
date:"2026-04-01",
clockIn:"09:00 AM",
clockOut:"06:00 PM",
status:"Present"
},
{
id:2,
employee:"Moksha Boya",
date:"2026-04-01",
clockIn:"09:20 AM",
clockOut:"06:05 PM",
status:"Late"
},
{
id:3,
employee:"Sindhu",
date:"2026-04-01",
clockIn:"--",
clockOut:"--",
status:"Absent"
}
];

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Attendance Report</h1>

<table className="employeeTable">

<thead>

<tr>
<th>ID</th>
<th>Employee</th>
<th>Date</th>
<th>Clock In</th>
<th>Clock Out</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{reports.map((report)=>(
<tr key={report.id}>

<td>{report.id}</td>
<td>{report.employee}</td>
<td>{report.date}</td>
<td>{report.clockIn}</td>
<td>{report.clockOut}</td>
<td>{report.status}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

);

}

export default AttendanceReport;