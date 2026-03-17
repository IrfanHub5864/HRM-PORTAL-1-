// Mock Attendance Service

const attendanceData = [
  {
    id: 1,
    employee: "Thahaseen Gulam",
    date: "2026-03-16",
    clockIn: "09:00 AM",
    clockOut: "06:00 PM",
    status: "Present"
  },
  {
    id: 2,
    employee: "Moksha Boya",
    date: "2026-03-16",
    clockIn: "09:15 AM",
    clockOut: "06:10 PM",
    status: "Late"
  }
];

export const getAttendance = () => {
  return attendanceData;
};