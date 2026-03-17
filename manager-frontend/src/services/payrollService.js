// Mock Payroll Service

const payroll = [
  {
    id: 1,
    employee: "Thahaseen Gulam",
    basicSalary: 50000,
    allowances: 10000,
    deductions: 5000,
    netSalary: 55000
  },
  {
    id: 2,
    employee: "Moksha Boya",
    basicSalary: 45000,
    allowances: 8000,
    deductions: 4000,
    netSalary: 49000
  }
];

export const getPayroll = () => {
  return payroll;
};