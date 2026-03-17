import React, { useState } from "react";

import "../styles/managerPanel.css";

function AssetsPage(){

const [assets,SetAsests] = useState([
{
id:1,
asset:"Laptop",
employee:"Thahaseen Gulam",
status:"Assigned"
},
{
id:2,
asset:"Monitor",
employee:"Moksha Boya",
status:"Assigned"
},
{
id:3,
asset:"Keyboard",
employee:"Sindhu",
status:"Available"
}
])

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Assets Management</h1>

<table className="employeeTable">

<thead>

<tr>
<th>ID</th>
<th>Asset Name</th>
<th>Assigned To</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{assets.map((a)=>(
<tr key={a.id}>

<td>{a.id}</td>
<td>{a.asset}</td>
<td>{a.employee}</td>
<td>{a.status}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default AssetsPage

