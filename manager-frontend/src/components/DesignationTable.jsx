import React from "react";

function DesignationTable(){

const designations = [
{ id:1, title:"Software Developer"},
{ id:2, title:"HR Executive"},
{ id:3, title:"Finance Analyst"}
];

return(

<ul>

{designations.map(d=>(
<li key={d.id}>{d.title}</li>
))}

</ul>

)

}

export default DesignationTable;