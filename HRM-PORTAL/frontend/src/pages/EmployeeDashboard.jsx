import React, { useEffect } from 'react';

const EmployeeDashboard = () => {
  useEffect(() => {
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
    script.src = '/employee.js';
    script.defer = true;
    document.body.appendChild(script);
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
          <span className="sidebar-tag">Employee</span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active" id="nav-dashboard">
            <span className="nav-icon">
              <i className="fas fa-th-large" />
            </span>
            Dashboard
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
          <a href="#" className="sidebar-link" id="nav-calendar">
            <span className="nav-icon">
              <i className="fas fa-calendar-day" />
            </span>
            Holiday Calendar
          </a>
          <a href="#" className="sidebar-link" id="nav-appreciations">
            <span className="nav-icon">
              <i className="fas fa-award" />
            </span>
            Appreciations
          </a>
          <a href="#" className="sidebar-link" id="nav-offboarding">
            <span className="nav-icon">
              <i className="fas fa-user-minus" />
            </span>
            Offboarding
          </a>
          <a href="#" className="sidebar-link" id="nav-expenses">
            <span className="nav-icon">
              <i className="fas fa-receipt" />
            </span>
            Expenses
          </a>
          <a href="#" className="sidebar-link" id="nav-payroll">
            <span className="nav-icon">
              <i className="fas fa-money-check-alt" />
            </span>
            Payroll
          </a>
          <a href="#" className="sidebar-link" id="nav-policies">
            <span className="nav-icon">
              <i className="fas fa-file-contract" />
            </span>
            Policies
          </a>
          <a href="#" className="sidebar-link" id="nav-profile">
            <span className="nav-icon">
              <i className="fas fa-user-cog" />
            </span>
            My Profile
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
            <span className="admin-badge">Employee</span>
            <span className="admin-email" id="employee-email-display">
              emp@shnoor.com
            </span>
          </div>
        </header>

        <main className="main-content" id="main-content">
          {/* Full employee-dashboard.html content (all views) */}
          <div className="view" id="view-dashboard">
            <div className="page-header">
              <h1 className="page-h1">Dashboard Summary</h1>
              <p className="page-sub">Your personal overview and stats</p>
            </div>
            <div className="grid grid-4" style={{ padding: 0, marginBottom: 24 }}>
              <div className="stat-card">
                <div className="stat-val" id="d-att-status">N/A</div>
                <div className="stat-label">Today's Status</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-work-hours">0</div>
                <div className="stat-label">Work Hours (Current Month)</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-late-count">0</div>
                <div className="stat-label">Late Arrivals</div>
              </div>
              <div className="stat-card">
                <div className="stat-val" id="d-asset-count">0</div>
                <div className="stat-label">Assigned Assets</div>
              </div>
            </div>
            <div className="grid grid-2" style={{ padding: 0 }}>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Employment Details</div></div>
                <div className="panel-body">
                  <p style={{ marginBottom: 12 }}><strong>Name:</strong> <span id="d-emp-name">Loading...</span></p>
                  <p style={{ marginBottom: 12 }}><strong>Joined:</strong> <span id="d-emp-join">Loading...</span></p>
                  <p style={{ marginBottom: 12 }}><strong>Department:</strong> <span id="d-emp-dept">N/A</span></p>
                  <p><strong>Designation:</strong> <span id="d-emp-desig">N/A</span></p>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Recent Appreciations</div></div>
                <div className="table-wrap">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody id="dash-app-list">
                      <tr><td style={{ textAlign: 'center' }}>Loading...</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-attendance">
            <div className="page-header"><h1 className="page-h1">Attendance History</h1></div>
            <div className="panel">
              <div className="panel-body" style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                <button id="btn-clock-in" className="btn btn-solid" style={{ height: 54, padding: '0 48px', fontSize: '1.1rem', borderRadius: 30 }}>Clock In</button>
                <button id="btn-clock-out" className="btn btn-outline" style={{ height: 54, padding: '0 48px', fontSize: '1.1rem', borderRadius: 30 }} disabled>Clock Out</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">My Clock Logs</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Date</th><th>Clock In</th><th>Clock Out</th><th>Hours</th><th>Status</th></tr></thead>
                  <tbody id="att-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-leaves">
            <div className="page-header"><h1 className="page-h1">Leave Management</h1></div>
            <div className="grid grid-2" style={{ padding: 0 }}>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Apply for Leave</div></div>
                <div className="panel-body">
                  <form id="form-leave">
                    <label className="form-label">Leave Type</label>
                    <select id="lv-type" className="input" required>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Casual Leave">Casual Leave</option>
                      <option value="Vacation">Vacation</option>
                    </select>
                    <label className="form-label">Start Date</label>
                    <input type="date" id="lv-start" className="input" required />
                    <label className="form-label">End Date</label>
                    <input type="date" id="lv-end" className="input" required />
                    <label className="form-label">Reason</label>
                    <textarea id="lv-reason" className="input" placeholder="State your reason..." style={{ minHeight: 100 }} required />
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Submit Request</button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">My Applications</div></div>
                <div className="table-wrap" style={{ padding: 0 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr><th>Dates</th><th>Type</th><th>Status</th></tr></thead>
                    <tbody id="lv-list"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-assets">
            <div className="page-header"><h1 className="page-h1">Assigned Equipment</h1></div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">My Assets</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Asset Name</th><th>Category</th><th>Serial Number</th><th>Assigned Date</th></tr></thead>
                  <tbody id="ass-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-calendar">
            <div className="page-header"><h1 className="page-h1">Holiday Calendar</h1></div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">Upcoming Holidays</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Holiday Event</th><th>Date</th><th>Description</th></tr></thead>
                  <tbody id="holi-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-appreciations">
            <div className="page-header"><h1 className="page-h1">Awards & Recognitions</h1></div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">My Feed</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Recognition Title</th><th>Description</th><th>Date Issued</th></tr></thead>
                  <tbody id="app-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-offboarding">
            <div className="page-header"><h1 className="page-h1">Offboarding Process</h1></div>
            <div className="grid grid-2" style={{ padding: 0 }}>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Submit Resignation</div></div>
                <div className="panel-body">
                  <form id="form-off">
                    <label className="form-label">Reason for Leaving</label>
                    <textarea id="off-reason" className="input" placeholder="Please provide details..." style={{ minHeight: 120 }} required />
                    <label className="form-label">Proposed Last Working Date</label>
                    <input type="date" id="off-date" className="input" required />
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Initiate Exit</button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Request Status</div></div>
                <div className="table-wrap" style={{ padding: 0 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr><th>Exit Date</th><th>Progress</th></tr></thead>
                    <tbody id="off-list"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-expenses">
            <div className="page-header"><h1 className="page-h1">Expense Claims</h1></div>
            <div className="grid grid-2" style={{ padding: 0 }}>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">New Claim</div></div>
                <div className="panel-body">
                  <form id="form-exp">
                    <label className="form-label">Title</label>
                    <input type="text" id="exp-title" className="input" placeholder="e.g. Travel to Client Site" required />
                    <label className="form-label">Amount ($)</label>
                    <input type="number" id="exp-amt" className="input" placeholder="0.00" step="0.01" required />
                    <label className="form-label">Category</label>
                    <input type="text" id="exp-cat" className="input" placeholder="e.g. Travel" />
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Submit Claim</button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">My Recent Claims</div></div>
                <div className="table-wrap" style={{ padding: 0 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr><th>Title</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody id="exp-list"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-payroll">
            <div className="page-header"><h1 className="page-h1">My Payroll History</h1></div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">Payslips</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Month/Period</th><th>Net Pay</th><th>Paid On</th><th>Document</th></tr></thead>
                  <tbody id="pay-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-policies">
            <div className="page-header"><h1 className="page-h1">Company Guidelines</h1></div>
            <div className="panel">
              <div className="panel-head"><div className="panel-title">Available Policies</div></div>
              <div className="table-wrap" style={{ padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr><th>Policy Name</th><th>Description</th><th>Access</th></tr></thead>
                  <tbody id="pol-list"></tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-profile">
            <div className="page-header"><h1 className="page-h1">Account Settings</h1></div>
            <div className="grid grid-2" style={{ padding: 0 }}>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Personal Information</div></div>
                <div className="panel-body">
                  <form id="form-profile">
                    <label className="form-label">Full Name</label>
                    <input type="text" id="prof-name" className="input" required />
                    <label className="form-label">Corporate Email</label>
                    <input type="email" id="prof-email" className="input" readOnly />
                    <label className="form-label">Contact Number</label>
                    <input type="text" id="prof-phone" className="input" />
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Save Changes</button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head"><div className="panel-title">Security & Access</div></div>
                <div className="panel-body">
                  <form id="form-pass">
                    <label className="form-label">Current Password</label>
                    <input type="password" id="pass-curr" className="input" placeholder="••••••••" required />
                    <label className="form-label">New Password</label>
                    <input type="password" id="pass-new" className="input" placeholder="••••••••" required />
                    <button type="submit" className="btn btn-solid" style={{ width: '100%' }}>Update Password</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

