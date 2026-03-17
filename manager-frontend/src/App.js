import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarNavigation from "./components/SidebarNavigation";

import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeesPage from "./pages/EmployeesPage";
import AttendancePage from "./pages/AttendancePage";
import AttendanceReport from "./pages/AttendanceReport";
import LeavesPage from "./pages/LeavesPage";
import PayrollPage from "./pages/PayrollPage";
import AssetsPage from "./pages/AssetsPage";
import AppreciationsPage from "./pages/AppreciationsPage";
import CompanyPoliciesPage from "./pages/CompanyPoliciesPage";
import OffboardingsPage from "./pages/OffboardingsPage";
import FinancePage from "./pages/FinancePage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>

        {/* Sidebar (only here) */}
        <SidebarNavigation />

        {/* Main Content */}
        <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>

          <Routes>

            <Route path="/" element={<ManagerDashboard />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/attendance-report" element={<AttendanceReport />} />
            <Route path="/leaves" element={<LeavesPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/appreciations" element={<AppreciationsPage />} />
            <Route path="/policies" element={<CompanyPoliciesPage />} />
            <Route path="/offboardings" element={<OffboardingsPage />} />
            <Route path="/finance" element={<FinancePage />} />

          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;