import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('site-mode');
    return () => {
      document.body.classList.remove('site-mode');
    };
  }, []);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await fetch('/api/v1/settings/header');
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          const s = data.data;
          const titleEl = document.getElementById('hero-title');
          const subEl = document.getElementById('hero-subtitle');
          const descEl = document.getElementById('hero-desc');
          const btnRow = document.getElementById('hero-btn-row');
          const primBtn = document.getElementById('hero-btn');
          const bg = document.getElementById('hero-bg-container');

          if (titleEl) titleEl.textContent = s.title || 'Welcome';
          if (subEl) {
            if (s.subtitle) {
              subEl.textContent = s.subtitle;
              subEl.style.display = 'inline-block';
            } else {
              subEl.style.display = 'none';
            }
          }
          if (descEl) {
            if (s.description) {
              descEl.textContent = s.description;
              descEl.style.display = 'block';
            } else {
              descEl.style.display = 'none';
            }
          }
          if (btnRow && primBtn) {
            if (s.showButton !== false) {
              btnRow.style.display = 'flex';
              primBtn.textContent = s.buttonText || 'Discover More';
              primBtn.setAttribute('href', s.buttonLink || '#features');
            } else {
              primBtn.style.display = 'none';
              btnRow.style.display = 'flex';
            }
          }
          if (bg && s.backgroundImage) {
            bg.style.backgroundImage = `url('${s.backgroundImage}')`;
          }
        }
      } catch {
        // ignore for now
      }
    };

    const fetchAbout = async () => {
      try {
        const res = await fetch('/api/v1/settings/about');
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          const a = data.data;
          const titleEl = document.getElementById('about-title');
          const descEl = document.getElementById('about-desc');
          const missionEl = document.getElementById('about-mission');
          const visionEl = document.getElementById('about-vision');
          if (titleEl && a.title) titleEl.textContent = a.title;
          if (descEl) {
            if (a.description) {
              descEl.textContent = a.description;
              descEl.style.display = 'block';
            } else {
              descEl.style.display = 'none';
            }
          }
          if (missionEl && a.mission) missionEl.textContent = a.mission;
          if (visionEl && a.vision) visionEl.textContent = a.vision;
        }
      } catch {
        // ignore
      }
    };

    const fetchContact = async () => {
      try {
        const res = await fetch('/api/v1/settings/contact');
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          const c = data.data;
          if (c.address) {
            const row = document.getElementById('contact-address-row');
            const text = document.getElementById('contact-address');
            if (row && text) {
              row.style.display = 'flex';
              text.textContent = c.address;
            }
          }
          if (c.email) {
            const row = document.getElementById('contact-email-row');
            const text = document.getElementById('contact-email');
            if (row && text) {
              row.style.display = 'flex';
              text.textContent = c.email;
            }
          }
          if (c.phone) {
            const row = document.getElementById('contact-phone-row');
            const text = document.getElementById('contact-phone');
            if (row && text) {
              row.style.display = 'flex';
              text.textContent = c.phone;
            }
          }
          const socialRow = document.getElementById('footer-social-row');
          if (socialRow) {
            const links = [];
            if (c.facebook && c.facebook !== '#') {
              links.push(
                `<a href="${c.facebook}" target="_blank" class="social-icon" title="Facebook"><i class="fab fa-facebook-f"></i></a>`
              );
            }
            if (c.twitter && c.twitter !== '#') {
              links.push(
                `<a href="${c.twitter}" target="_blank" class="social-icon" title="Twitter"><i class="fab fa-twitter"></i></a>`
              );
            }
            if (c.linkedin && c.linkedin !== '#') {
              links.push(
                `<a href="${c.linkedin}" target="_blank" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>`
              );
            }
            if (c.instagram && c.instagram !== '#') {
              links.push(
                `<a href="${c.instagram}" target="_blank" class="social-icon" title="Instagram"><i class="fab fa-instagram"></i></a>`
              );
            }
            socialRow.innerHTML = links.join('');
          }
        }
      } catch {
        // ignore
      }
    };

    const fetchFeatures = async () => {
      try {
        const res = await fetch('/api/v1/settings/features');
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          const grid = document.getElementById('features-grid');
          if (grid) {
            grid.innerHTML = data.data
              .map(
                (f) => `
            <div class="card">
              <div class="card-icon" style="font-size: 2rem; margin-bottom: 12px;">${f.icon || '✨'}</div>
              <h3 class="card-title" style="font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: 6px;">${f.title}</h3>
              <p class="card-text" style="font-size: 0.95rem; color: var(--text-light); line-height: 1.5;">${f.description}</p>
            </div>`
              )
              .join('');
          }
        }
      } catch {
        // ignore
      }
    };

    const fetchPricing = async () => {
      try {
        const res = await fetch('/api/v1/settings/pricing');
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          const grid = document.getElementById('pricing-grid');
          if (grid) {
            grid.innerHTML = data.data
              .map(
                (p) => `
            <div class="card ${p.isPopular ? 'card-featured' : ''}">
              <h3 class="pricing-name" style="font-size: 1.25rem; font-weight: 700; color: var(--text);">${p.planName}</h3>
              <div class="pricing-price" style="font-size: 2.5rem; font-weight: 800; color: var(--text); margin: 12px 0;">$${p.price}<span style="font-size:1rem; font-weight:500; color:var(--text-light)">/mo</span></div>
              <hr class="divider" style="margin: 20px 0;"/>
              <ul class="pricing-features" style="list-style: none; padding: 0; display:flex; flex-direction:column; gap:12px;">
                ${p.features
                  .map(
                    (f) =>
                      `<li style="font-size: 0.95rem; color: var(--text); display:flex; gap:8px;">✅ <span>${f}</span></li>`
                  )
                  .join('')}
              </ul>
              <a href="#register" class="btn ${p.isPopular ? 'btn-solid' : 'btn-outline'} btn-block" style="margin-top:auto">Choose Plan</a>
            </div>`
              )
              .join('');
          }
        }
      } catch {
        // ignore
      }
    };

    fetchHeader();
    fetchAbout();
    fetchContact();
    fetchFeatures();
    fetchPricing();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('shnoor_admin', 'true');
        sessionStorage.setItem('shnoor_token', data.token);
        sessionStorage.setItem('shnoor_admin_email', data.user.email);
        if (data.user.role === 'Manager') {
          navigate('/manager');
        } else if (data.user.role === 'Employee') {
          navigate('/employee');
        } else {
          navigate('/admin');
        }
      } else {
        setLoginError(data.error || 'Invalid email or password.');
      }
    } catch {
      setLoginError('Network error. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            shnoor
          </a>
          <nav className="nav-links">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <div className="nav-right">
            <div className="lang-wrap">
              <span>🌐</span>
              <select id="lang" defaultValue="en">
                <option value="en">EN</option>
                <option value="ar">AR</option>
                <option value="fr">FR</option>
                <option value="ur">UR</option>
              </select>
            </div>
            <a href="#register" className="btn btn-outline">
              Register
            </a>
            <a href="#login" className="btn btn-solid">
              Login
            </a>
          </div>
        </div>
      </header>

      <section className="section hero" id="home">
        <div className="container center">
          <div className="hero-badge" id="hero-subtitle" style={{ display: 'none' }} />
          <h1 className="hero-title" id="hero-title">
            Loading...
          </h1>
          <p className="hero-desc" id="hero-desc" style={{ display: 'none' }} />
          <div className="btn-row" id="hero-btn-row" style={{ display: 'none' }}>
            <a href="#features" className="btn btn-solid" id="hero-btn">
              Discover More
            </a>
            <a href="#features" className="btn btn-outline" id="hero-btn-secondary">
              Explore Features
            </a>
          </div>
          <div className="hero-visual" id="hero-bg-container" />
        </div>
      </section>

      <section className="section" id="about">
        <div className="container center">
          <div className="section-label">About Us</div>
          <h2 className="section-title" id="about-title">
            Our Story
          </h2>
          <p
            className="section-desc"
            id="about-desc"
            style={{ maxWidth: 800, textAlign: 'center', margin: '0 auto', lineHeight: 1.6 }}
          >
            Loading...
          </p>
          <div
            className="grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
              marginTop: 40,
              textAlign: 'left',
              width: '100%',
            }}
          >
            <div className="card" style={{ background: 'var(--bg-light)', border: 'none' }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: 12,
                }}
              >
                Our Mission
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }} id="about-mission">
                Loading...
              </p>
            </div>
            <div className="card" style={{ background: 'var(--bg-light)', border: 'none' }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: 12,
                }}
              >
                Our Vision
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }} id="about-vision">
                Loading...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container center">
          <div className="section-label">Features</div>
          <h2 className="section-title">Everything you need</h2>
          <p className="section-desc">
            Tools built for modern HR teams to manage their workforce effectively.
          </p>
          <div className="grid-3" id="features-grid" />
        </div>
      </section>

      <section className="section bg-light" id="pricing">
        <div className="container center">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-desc">
            No hidden fees. Choose the plan that works best for your team.
          </p>
          <div className="grid-3" id="pricing-grid" />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-layout">
          <div className="contact-left">
            <div className="section-label">Contact Us</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
              Get in touch
            </h2>
            <p
              className="section-desc"
              style={{ textAlign: 'left', marginBottom: 30, maxWidth: '100%' }}
            >
              Have questions? Reach out to our team via email or visit us at our office.
            </p>
            <div className="contact-items">
              <div className="contact-row" id="contact-address-row" style={{ display: 'none' }}>
                <div className="contact-icon">📍</div>
                <div className="contact-text" id="contact-address" />
              </div>
              <div className="contact-row" id="contact-email-row" style={{ display: 'none' }}>
                <div className="contact-icon">✉️</div>
                <div className="contact-text" id="contact-email" />
              </div>
              <div className="contact-row" id="contact-phone-row" style={{ display: 'none' }}>
                <div className="contact-icon">📞</div>
                <div className="contact-text" id="contact-phone" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="login">
        <div className="container center">
          <div className="auth-card">
            <div className="auth-logo-wrap">
              <span className="auth-brand">shnoor</span>
            </div>
            <h2 className="auth-heading">Welcome back</h2>
            <p className="auth-sub-text">Sign in to your account</p>
            {loginError && (
              <div className="login-error" style={{ display: 'block' }}>
                {loginError}
              </div>
            )}
            <form id="login-form" onSubmit={handleLogin} noValidate>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  onChange={() => setLoginError('')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  onChange={() => setLoginError('')}
                />
              </div>
              <div className="auth-row" style={{ marginBottom: 20 }}>
                <label className="checkbox-label">
                  <input type="checkbox" id="remember-me" /> Remember me
                </label>
                <a href="#forgot" className="link-small">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-solid btn-block"
                id="login-submit"
                disabled={loginLoading}
              >
                {loginLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <p className="auth-foot-text">
              Do not have an account?{' '}
              <a href="#register" className="link-small">
                Register
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <div className="footer-brand" style={{ alignItems: 'center' }}>
            <span className="logo">shnoor</span>
            <div
              className="footer-text"
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-light)',
                marginTop: 10,
              }}
            >
              Empowering Next-Gen Workforce
            </div>
            <div className="social-row" id="footer-social-row" style={{ marginTop: 20, gap: 20 }} />
          </div>
        </div>
        <div className="footer-bar">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
            &copy; 2026 Shnoor International LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

