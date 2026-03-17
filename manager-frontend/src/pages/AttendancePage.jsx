import React, { useState } from "react";

import "../styles/managerPanel.css";

function AttendancePage(){

const [status,setStatus] = useState("Not Tapped In");
const [tapIn,setTapIn] = useState("");
const [tapOut,setTapOut] = useState("");
const [workHours,setWorkHours] = useState("");
const [records,setRecords] = useState([]);

const handleTapIn = () => {

const now = new Date();
const time = now.toLocaleTimeString();

setTapIn(time);
setStatus("Working");

};

const handleTapOut = () => {

const now = new Date();
const time = now.toLocaleTimeString();

setTapOut(time);
setStatus("Completed");

const start = new Date(`01/01/2000 ${tapIn}`);
const end = new Date(`01/01/2000 ${time}`);

const diff = (end - start) / (1000 * 60 * 60);
const hours = diff.toFixed(2);

setWorkHours(hours + " hrs");

const newRecord = {

date : new Date().toLocaleDateString(),
tapIn : tapIn,
tapOut : time,
workHours : hours + " hrs"

};

setRecords([...records,newRecord]);

};

return(

<div className="dashboardLayout">



<div className="mainContent">

<h1>Attendance Management</h1>

<div className="attendanceWidget">

<h2>Today's Attendance</h2>

<p>Status: <b>{status}</b></p>

<p>Tap In Time: {tapIn}</p>

<p>Tap Out Time: {tapOut}</p>

<p>Work Duration: {workHours}</p>

<button className="tapIn" onClick={handleTapIn}>
Tap In
</button>

<button className="tapOut" onClick={handleTapOut}>
Tap Out
</button>

</div>


<h2 className="sectionTitle">Attendance History</h2>

<table className="employeeTable">

<thead>

<tr>
<th>Date</th>
<th>Tap In</th>
<th>Tap Out</th>
<th>Work Hours</th>
</tr>

</thead>

<tbody>

{records.map((rec,index)=>(
<tr key={index}>

<td>{rec.date}</td>
<td>{rec.tapIn}</td>
<td>{rec.tapOut}</td>
<td>{rec.workHours}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default AttendancePage;