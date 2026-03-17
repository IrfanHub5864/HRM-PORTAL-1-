import React, { useState } from "react";

function AttendanceWidget() {

  const [status, setStatus] = useState("Not Tapped In");
  const [tapInTime, setTapInTime] = useState("");
  const [tapOutTime, setTapOutTime] = useState("");

  const handleTapIn = () => {
    const time = new Date().toLocaleTimeString();
    setTapInTime(time);
    setStatus("Working");
  };

  const handleTapOut = () => {
    const time = new Date().toLocaleTimeString();
    setTapOutTime(time);
    setStatus("Completed");
  };

  return (
    <div className="attendanceWidget">

      <h2>Today's Attendance</h2>

      <p>Status: <b>{status}</b></p>

      <p>Tap In Time: {tapInTime}</p>

      <p>Tap Out Time: {tapOutTime}</p>

      <div className="attendanceButtons">

        <button className="tapIn" onClick={handleTapIn}>
          Tap In
        </button>

        <button className="tapOut" onClick={handleTapOut}>
          Tap Out
        </button>

      </div>

    </div>
  );
}

export default AttendanceWidget;