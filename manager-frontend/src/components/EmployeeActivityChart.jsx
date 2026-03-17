import React from "react";

function EmployeeActivityChart(){

const weeklyData = [
{ day: "Monday", employees: 80 },
{ day: "Tuesday", employees: 85 },
{ day: "Wednesday", employees: 78 },
{ day: "Thursday", employees: 90 },
{ day: "Friday", employees: 88 }
];

return(

<div className="activityCard">

<h3>Weekly Employee Activity</h3>

<table className="activityTable">

<thead>
<tr>
<th>Day</th>
<th>Employees Present</th>
</tr>
</thead>

<tbody>

{weeklyData.map((data,index)=>(
<tr key={index}>
<td>{data.day}</td>
<td>{data.employees}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default EmployeeActivityChart;