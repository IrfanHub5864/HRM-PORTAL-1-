import React from "react";
import "../styles/managerPanel.css";

function AppreciationsPage() {

const appreciations = [
{
id:1,
employee:"Thahaseen Gulam",
award:"Employee of the Month",
date:"April 2026"
},
{
id:2,
employee:"Moksha Boya",
award:"Best Team Player",
date:"March 2026"
},
{
id:3,
employee:"Sindhu",
award:"Outstanding Performance",
date:"February 2026"
}
];

return(

<div className="mainContent">

<h1>Employee Appreciations</h1>

<table className="employeeTable">

<thead>
<tr>
<th>ID</th>
<th>Employee Name</th>
<th>Award</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{appreciations.map((item)=>(
<tr key={item.id}>

<td>{item.id}</td>
<td>{item.employee}</td>
<td>{item.award}</td>
<td>{item.date}</td>

</tr>
))}

</tbody>

</table>

</div>

);

}

export default AppreciationsPage;