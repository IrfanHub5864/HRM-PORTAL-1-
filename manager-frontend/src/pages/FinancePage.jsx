import React from "react";
//import SidebarNavigation from "../components/SidebarNavigation";

function FinancePage(){

const expenses = [
{ id:1, item:"Office Supplies", amount:5000},
{ id:2, item:"Travel Expenses", amount:8000}
];

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Finance</h1>

<table className="employeeTable">

<thead>
<tr>
<th>ID</th>
<th>Item</th>
<th>Amount</th>
</tr>
</thead>

<tbody>

{expenses.map(e=>(
<tr key={e.id}>
<td>{e.id}</td>
<td>{e.item}</td>
<td>₹{e.amount}</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default FinancePage;