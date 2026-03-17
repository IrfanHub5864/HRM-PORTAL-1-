import React from "react";

function DepartmentTable(){

const departments = [
{ id:1, name:"Engineering", head:"Rahul"},
{ id:2, name:"HR", head:"Anita"}
];

return(

<table className="employeeTable">

<thead>
<tr>
<th>ID</th>
<th>Department</th>
<th>Head</th>
</tr>
</thead>

<tbody>

{departments.map(d=>(
<tr key={d.id}>
<td>{d.id}</td>
<td>{d.name}</td>
<td>{d.head}</td>
</tr>
))}

</tbody>

</table>

)

}

export default DepartmentTable;