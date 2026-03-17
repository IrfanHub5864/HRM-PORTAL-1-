// Mock Employee Service

const employees = [
  {
    id: 1,
    name: "Thahaseen Gulam",
    email: "thahaseen@company.com",
    department: "Engineering",
    designation: "Software Developer",
    status: "Active"
  },
  {
    id: 2,
    name: "Moksha Boya",
    email: "moksha@company.com",
    department: "HR",
    designation: "HR Executive",
    status: "Active"
  },
  {
    id: 3,
    name: "Sindhu",
    email: "sindhu@company.com",
    department: "Finance",
    designation: "Accountant",
    status: "Inactive"
  }
];

export const getEmployees = () => {
  return employees;
};