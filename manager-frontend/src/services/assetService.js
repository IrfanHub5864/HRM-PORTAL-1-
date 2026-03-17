// Mock Asset Service

const assets = [
  {
    id: 1,
    asset: "Laptop",
    employee: "Thahaseen Gulam",
    status: "Assigned"
  },
  {
    id: 2,
    asset: "Monitor",
    employee: "Moksha Boya",
    status: "Assigned"
  },
  {
    id: 3,
    asset: "Keyboard",
    employee: "Sindhu",
    status: "Available"
  }
];

export const getAssets = () => {
  return assets;
};