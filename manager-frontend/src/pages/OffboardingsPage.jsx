import React from "react";
//import SidebarNavigation from "../components/SidebarNavigation";

function OffboardingsPage(){

const offboardings = [
{ id:1, employee:"Rahul Sharma", reason:"Resignation"},
{ id:2, employee:"Anita Rao", reason:"Contract End"}
];

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Offboardings</h1>

<table className="employeeTable">

<thead>
<tr>
<th>ID</th>
<th>Employee</th>
<th>Reason</th>
</tr>
</thead>

<tbody>

{offboardings.map(o=>(
<tr key={o.id}>
<td>{o.id}</td>
<td>{o.employee}</td>
<td>{o.reason}</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default OffboardingsPage;