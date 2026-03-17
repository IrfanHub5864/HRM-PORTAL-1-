import React, { useEffect } from 'react';

const AdminDashboard = () => {
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

    // Load existing admin.js to wire up API logic and dynamic behavior
    const script = document.createElement('script');
    script.src = '/admin.js';
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
          <span className="sidebar-tag">Admin</span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link active" id="nav-dashboard">
            <span className="nav-icon">
              <i className="fas fa-th-large" />
            </span>
            Dashboard
          </a>
          <a href="#" className="sidebar-link" id="nav-companies">
            <span className="nav-icon">
              <i className="fas fa-building" />
            </span>
            Companies
          </a>
          <a href="#" className="sidebar-link" id="nav-subscriptions">
            <span className="nav-icon">
              <i className="fas fa-credit-card" />
            </span>
            Subscriptions
          </a>
          <a href="#" className="sidebar-link" id="nav-transactions">
            <span className="nav-icon">
              <i className="fas fa-file-invoice-dollar" />
            </span>
            Transactions
          </a>
          <a href="#" className="sidebar-link" id="nav-offline">
            <span className="nav-icon">
              <i className="fas fa-download" />
            </span>
            Offline Requests
          </a>
          <a href="#" className="sidebar-link" id="nav-superadmin">
            <span className="nav-icon">
              <i className="fas fa-user-shield" />
            </span>
            Super Admin Management
          </a>
          <a href="#" className="sidebar-link" id="nav-website">
            <span className="nav-icon">
              <i className="fas fa-globe" />
            </span>
            Website Settings
          </a>
          <a href="#" className="sidebar-link" id="nav-system">
            <span className="nav-icon">
              <i className="fas fa-cog" />
            </span>
            Settings
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
            <span className="admin-badge">Admin</span>
            <span className="admin-email" id="admin-email-display">
              admin@shnoor.com
            </span>
          </div>
        </header>

        <main className="main-content" id="main-content">
          <div className="view" id="view-dashboard">
            <div className="page-header">
              <h1 className="page-h1">Dashboard</h1>
              <p className="page-sub">Overview of your platform</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Total Companies</div>
                <div className="stat-val" id="stat-companies">
                  0
                </div>
                <div className="stat-sub">Active organizations</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Active Companies</div>
                <div className="stat-val" id="stat-active-companies">
                  0
                </div>
                <div className="stat-sub">Currently active</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Inactive Companies</div>
                <div className="stat-val" id="stat-inactive-companies">
                  0
                </div>
                <div className="stat-sub">Suspended or inactive</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Pending Companies</div>
                <div className="stat-val" id="stat-pending-companies">
                  0
                </div>
                <div className="stat-sub">Require approval</div>
              </div>
            </div>
            <div className="panel mt">
              <div className="panel-head">
                <div className="panel-title">Recent Companies Added</div>
              </div>
              <div className="table-wrap">
                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: 12 }}>Company Info</th>
                      <th style={{ padding: 12 }}>Location</th>
                      <th style={{ padding: 12 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody id="recent-activities-body">
                    <tr>
                      <td
                        colSpan={3}
                        style={{ padding: 20, textAlign: 'center', color: 'var(--text-light)' }}
                      >
                        Loading recent activities...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-companies">
            <div className="page-header">
              <h1 className="page-h1">Companies</h1>
              <p className="page-sub">Manage registered organizations</p>
            </div>
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}
            >
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">Add New Company</div>
                </div>
                <div className="panel-body" style={{ padding: 24 }}>
                  <form id="add-company-form">
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="comp-name-input"
                        name="name"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="comp-email-input"
                        name="email"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="comp-loc-input"
                        name="location"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Subscription Plan
                      </label>
                      <input
                        type="text"
                        id="comp-plan-input"
                        name="subscriptionPlan"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 24 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Status
                      </label>
                      <select
                        id="comp-status-input"
                        name="status"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      style={{
                        width: '100%',
                        padding: 10,
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Add Company
                    </button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">All Companies</div>
                </div>
                <div className="table-wrap">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                        <th style={{ padding: 12 }}>Company Info</th>
                        <th style={{ padding: 12 }}>Location</th>
                        <th style={{ padding: 12 }}>Plan</th>
                        <th style={{ padding: 12 }}>Status</th>
                        <th style={{ padding: 12 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="companies-list">
                      <tr>
                        <td
                          colSpan={4}
                          style={{ padding: 20, textAlign: 'center', color: 'var(--text-light)' }}
                        >
                          Loading companies...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-subscriptions">
            <div className="page-header">
              <h1 className="page-h1">Subscriptions</h1>
              <p className="page-sub">Company plan enrollments</p>
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Active Subscriptions</div>
              </div>
              <div className="table-wrap">
                <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: 12 }}>Company</th>
                      <th style={{ padding: 12 }}>Email</th>
                      <th style={{ padding: 12 }}>Subscription Plan</th>
                      <th style={{ padding: 12 }}>Status</th>
                    </tr>
                  </thead>
                  <tbody id="subscriptions-list">
                    <tr>
                      <td
                        colSpan={4}
                        style={{ padding: 20, textAlign: 'center', color: 'var(--text-light)' }}
                      >
                        Loading subscriptions...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-transactions">
            <div className="page-header">
              <h1 className="page-h1">Transactions</h1>
              <p className="page-sub">Monitor all payments</p>
            </div>
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}
            >
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">Add / Edit Transaction</div>
                </div>
                <div className="panel-body" style={{ padding: 24 }}>
                  <form id="add-transaction-form">
                    <input type="hidden" id="trans-id-input" defaultValue="" />
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Company
                      </label>
                      <select
                        id="trans-company-input"
                        name="companyId"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Amount ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        id="trans-amount-input"
                        name="amount"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Transaction Date
                      </label>
                      <input
                        type="date"
                        id="trans-date-input"
                        name="transactionDate"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Next Payment Date
                      </label>
                      <input
                        type="date"
                        id="trans-next-date-input"
                        name="nextPaymentDate"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Payment Method
                      </label>
                      <input
                        type="text"
                        id="trans-method-input"
                        name="paymentMethod"
                        placeholder="e.g. Credit Card, PayPal"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 24 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Status
                      </label>
                      <select
                        id="trans-status-input"
                        name="status"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      >
                        <option value="Success">Success</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      id="trans-submit-btn"
                      className="btn btn-solid"
                      style={{
                        width: '100%',
                        padding: 10,
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Save Transaction
                    </button>
                    <button
                      type="button"
                      id="trans-cancel-btn"
                      className="btn btn-outline hidden"
                      style={{
                        width: '100%',
                        padding: 10,
                        marginTop: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Cancel Edit
                    </button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">All Transactions</div>
                </div>
                <div className="table-wrap">
                  <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                        <th style={{ padding: 12 }}>Date</th>
                        <th style={{ padding: 12 }}>Company</th>
                        <th style={{ padding: 12 }}>Amount</th>
                        <th style={{ padding: 12 }}>Next Payment</th>
                        <th style={{ padding: 12 }}>Method</th>
                        <th style={{ padding: 12 }}>Status</th>
                        <th style={{ padding: 12 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="transactions-list">
                      <tr>
                        <td
                          colSpan={7}
                          style={{ padding: 20, textAlign: 'center', color: 'var(--text-light)' }}
                        >
                          Loading transactions...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-offline">
            <div className="page-header">
              <h1 className="page-h1">Offline Requests</h1>
              <p className="page-sub">Pending manual approvals</p>
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Requests</div>
              </div>
              <div className="panel-body">
                <p style={{ padding: 20, color: 'var(--text-light)' }}>
                  No pending offline requests.
                </p>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-superadmin">
            <div className="page-header">
              <h1 className="page-h1">Super Admin Management</h1>
              <p className="page-sub">Manage platform administrators</p>
            </div>
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}
            >
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">Add New Admin</div>
                </div>
                <div className="panel-body" style={{ padding: 20 }}>
                  <form id="add-admin-form">
                    <div className="form-group mb" style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', marginBottom: 5 }}>Full Name</label>
                      <input
                        type="text"
                        id="admin-name-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 8,
                          border: '1px solid var(--border)',
                          borderRadius: 4,
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', marginBottom: 5 }}>Email</label>
                      <input
                        type="email"
                        id="admin-email-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 8,
                          border: '1px solid var(--border)',
                          borderRadius: 4,
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 12 }}>
                      <label style={{ display: 'block', marginBottom: 5 }}>Password</label>
                      <input
                        type="password"
                        id="admin-password-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 8,
                          border: '1px solid var(--border)',
                          borderRadius: 4,
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 5 }}>Role</label>
                      <select
                        id="admin-role-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 8,
                          border: '1px solid var(--border)',
                          borderRadius: 4,
                        }}
                      >
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      style={{
                        width: '100%',
                        padding: 10,
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Create Admin
                    </button>
                  </form>
                </div>
              </div>
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">Existing Administrators</div>
                </div>
                <div className="table-wrap">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                        <th style={{ padding: 12 }}>Name</th>
                        <th style={{ padding: 12 }}>Role</th>
                        <th style={{ padding: 12 }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="admins-list" />
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-system">
            <div className="page-header">
              <h1 className="page-h1">Settings</h1>
              <p className="page-sub">Profile configuration</p>
            </div>
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}
            >
              <div className="panel">
                <div className="panel-head">
                  <div className="panel-title">Profile Settings</div>
                </div>
                <div className="panel-body" style={{ padding: 24 }}>
                  <form id="profile-settings-form">
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="profile-name-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <div className="form-group mb" style={{ marginBottom: 16 }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: 8,
                          fontWeight: 500,
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="profile-email-input"
                        className="input"
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-sm)',
                        }}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      style={{
                        padding: '10px 24px',
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="view hidden" id="view-website-settings">
            <div className="page-header">
              <h1 className="page-h1">Website Settings</h1>
              <p className="page-sub">Configure your public website sections</p>
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Header Settings</div>
              </div>
              <div className="panel-body" style={{ padding: 24 }}>
                <form id="header-settings-form">
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-title"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Title
                    </label>
                    <input
                      type="text"
                      id="header-title"
                      name="title"
                      className="input"
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                      required
                    />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-subtitle"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Sub Title
                    </label>
                    <input
                      type="text"
                      id="header-subtitle"
                      name="subtitle"
                      className="input"
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-desc"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Description
                    </label>
                    <textarea
                      id="header-desc"
                      name="description"
                      className="input"
                      rows={4}
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-bg"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Background Image
                    </label>
                    <input
                      type="file"
                      id="header-bg"
                      name="backgroundImage"
                      className="input"
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                    <div id="current-bg-preview" style={{ marginTop: 10 }} />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-btn-text"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Button Text
                    </label>
                    <input
                      type="text"
                      id="header-btn-text"
                      name="buttonText"
                      className="input"
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 16 }}>
                    <label
                      htmlFor="header-btn-link"
                      style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}
                    >
                      Header Button Link
                    </label>
                    <input
                      type="text"
                      id="header-btn-link"
                      name="buttonLink"
                      className="input"
                      style={{
                        width: '100%',
                        padding: 10,
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    />
                  </div>
                  <div className="form-group mb" style={{ marginBottom: 24 }}>
                    <label
                      htmlFor="header-show-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontWeight: 500,
                      }}
                    >
                      <input type="checkbox" id="header-show-btn" name="showButton" defaultChecked />
                      Show Header Button
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-solid"
                    style={{
                      padding: '10px 24px',
                      background: 'var(--primary)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    Save Header Settings
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

