// Mock Leave Service

const leaves = [
  {
    id: 1,
    employee: "Thahaseen Gulam",
    type: "Sick Leave",
    startDate: "2026-03-20",
    endDate: "2026-03-21",
    status: "Pending"
  },
  {
    id: 2,
    employee: "Moksha Boya",
    type: "Annual Leave",
    startDate: "2026-03-25",
    endDate: "2026-03-27",
    status: "Approved"
  }
];

export const getLeaves = () => {
  return leaves;
};