import React from "react";

function ShiftManagement(){

const shifts = [
{ id:1, shift:"Morning Shift"},
{ id:2, shift:"Evening Shift"},
{ id:3, shift:"Night Shift"}
];

return(

<ul>

{shifts.map(s=>(
<li key={s.id}>{s.shift}</li>
))}

</ul>

)

}

export default ShiftManagement;