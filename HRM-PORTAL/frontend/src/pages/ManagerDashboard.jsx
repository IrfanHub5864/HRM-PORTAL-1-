import React, { useEffect } from 'react';

const ManagerDashboard = () => {
  useEffect(() => {
    // Only load backend team's assets; do not modify their JS.
    document.body.classList.remove('site-mode');
    document.body.classList.add('dashboard-mode');
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/admin.css';
    css.dataset.hrm = 'admin-css';
    document.head.appendChild(css);

    const token = sessionStorage.getItem('shnoor_token');
    if (!token) {
      window.location.href = '/';
      return;
    }
    const script = document.createElement('script');
    script.src = '/manager.js';
    script.defer = true;
    document.body.appendChild(script);
    // manager.js registers a DOMContentLoaded handler; trigger it after injection
    // so it runs even in SPA navigation.
    script.onload = () => {
      document.dispatchEvent(new Event('DOMContentLoaded'));
    };
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(css);
      document.body.classList.remove('dashboard-mode');
    };
  }, []);

  return (
    <div className="app-root">
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-top">
          <span className="sidebar-brand">shnoor</span>
          <span className="sidebar-tag">Manager</span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active" id="nav-dashboard">
            <span className="nav-icon">
              <i className="fas fa-th-large" />
            </span>
            Dashboard
          </a>
          <a href="#" className="sidebar-link" id="nav-employees">
            <span className="nav-icon">
              <i className="fas fa-users" />
            </span>
            Employees
          </a>
          <a href="#" className="sidebar-link" id="nav-attendance">
            <span className="nav-icon">
              <i className="fas fa-clock" />
            </span>
            Attendance
          </a>
          <a href="#" className="sidebar-link" id="nav-leaves">
            <span className="nav-icon">
              <i className="fas fa-calendar-alt" />
            </span>
            Leaves
          </a>
          <a href="#" className="sidebar-link" id="nav-assets">
            <span className="nav-icon">
              <i className="fas fa-laptop" />
            </span>
            Assets
          </a>
          <a href="#" className="sidebar-link" id="nav-payroll">
            <span className="nav-icon">
              <i className="fas fa-money-check-alt" />
            </span>
            Payroll
          </a>
          <a href="#" className="sidebar-link" id="nav-appreciations">
            <span className="nav-icon">
              <i className="fas fa-award" />
            </span>
            Appreciations
          </a>
          <a href="#" className="sidebar-link" id="nav-policies">
            <span className="nav-icon">
              <i className="fas fa-file-contract" />
            </span>
            Policies
          </a>
          <a href="#" className="sidebar-link" id="nav-offboardings">
            <span className="nav-icon">
              <i className="fas fa-user-minus" />
            </span>
            Offboardings
          </a>
          <a href="#" className="sidebar-link" id="nav-finance">
            <span className="nav-icon">
              <i className="fas fa-wallet" />
            </span>
            Finance
          </a>
          <a href="#" className="sidebar-link" id="nav-holidays">
            <span className="nav-icon">
              <i className="fas fa-calendar-star" />
            </span>
            Holidays
          </a>
        </nav>
        <div className="sidebar-bottom">
          <a href="/" className="sidebar-link sidebar-logout" id="nav-logout">
            <span className="nav-icon">↩</span> Logout
          </a>
        </div>
      </aside>

      <div className="main-wrap">
        <header className="topbar">
          <button className="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle sidebar">
            ☰
          </button>
          <div className="topbar-title" id="page-title">
            Dashboard
          </div>
          <div className="topbar-right">
            <span className="admin-badge">Manager</span>
            <span className="admin-email" id="manager-email-display">
              manager@shnoor.com
            </span>
          </div>
        </header>

        <main className="main-content" id="main-content">
          {/* TODO: replace with full manager-dashboard.html markup in React (all views). */}
          <div className="view" id="view-dashboard">
            <div className="page-header">
              <h1 className="page-h1">Dashboard Overview</h1>
              <p className="page-sub">Real-time stats from the system</p>
            </div>
            <div className="grid grid-4" style={{ padding: 0, marginBottom: 24 }}>
              <div className="stat-card">
                <div className="stat-val" id="d-tot-emp">0</div>
                <div className="stat-label">Total Employees</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-act-emp">0</div>
                <div className="stat-label">Active Employees</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-pend-leaves">0</div>
                <div className="stat-label">Pending Leaves</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-tod-att">0</div>
                <div className="stat-label">Today's Attendance</div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Recent Activities (Leave Requests)</div>
              </div>
              <div className="table-wrap">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Leave Type</th>
                      <th>Dates</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody id="dash-recent-list">
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center' }}>Loading...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;

