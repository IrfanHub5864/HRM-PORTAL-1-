import React, { useState } from "react";
//import SidebarNavigation from "../components/SidebarNavigation";
import "../styles/managerPanel.css";

function LeavesPage(){

const [leaves,setLeaves] = useState([
{
id:1,
employee:"Thahaseen Gulam",
type:"Sick Leave",
from:"10/04/2026",
to:"12/04/2026",
status:"Pending"
},
{
id:2,
employee:"Moksha Boya",
type:"Casual Leave",
from:"15/04/2026",
to:"16/04/2026",
status:"Pending"
}
])

const approveLeave = (id)=>{

setLeaves(
leaves.map(l =>
l.id === id ? {...l,status:"Approved"} : l
)
)

}

const rejectLeave = (id)=>{

setLeaves(
leaves.map(l =>
l.id === id ? {...l,status:"Rejected"} : l
)
)

}

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Leave Management</h1>

<table className="employeeTable">

<thead>

<tr>
<th>ID</th>
<th>Employee</th>
<th>Leave Type</th>
<th>From</th>
<th>To</th>
<th>Status</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{leaves.map((leave)=>(

<tr key={leave.id}>

<td>{leave.id}</td>
<td>{leave.employee}</td>
<td>{leave.type}</td>
<td>{leave.from}</td>
<td>{leave.to}</td>

<td>

<span className={
leave.status==="Approved"
?"statusApproved"
:leave.status==="Rejected"
?"statusRejected"
:"statusPending"
}>

{leave.status}

</span>

</td>

<td>

<button
className="approveBtn"
onClick={()=>approveLeave(leave.id)}
>

Approve

</button>

<button
className="rejectBtn"
onClick={()=>rejectLeave(leave.id)}
>

Reject

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default LeavesPage