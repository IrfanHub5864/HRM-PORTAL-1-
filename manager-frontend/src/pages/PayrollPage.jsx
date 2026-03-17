import React, { useState } from "react";
//import SidebarNavigation from "../components/SidebarNavigation";
import "../styles/managerPanel.css";

function PayrollPage(){

const [payroll,setPayroll] = useState([
{
id:1,
employee:"Thahaseen Gulam",
basic:50000,
allowances:5000,
deductions:2000
},
{
id:2,
employee:"Moksha Boya",
basic:45000,
allowances:4000,
deductions:1500
}
])

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Payroll Management</h1>

<table className="employeeTable">

<thead>

<tr>
<th>ID</th>
<th>Employee</th>
<th>Basic Salary</th>
<th>Allowances</th>
<th>Deductions</th>
<th>Net Salary</th>
</tr>

</thead>

<tbody>

{payroll.map((p)=>{

const net = p.basic + p.allowances - p.deductions

return(

<tr key={p.id}>

<td>{p.id}</td>
<td>{p.employee}</td>
<td>₹{p.basic}</td>
<td>₹{p.allowances}</td>
<td>₹{p.deductions}</td>
<td><b>₹{net}</b></td>

</tr>

)

})}

</tbody>

</table>

</div>

</div>

)

}

export default PayrollPage