import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Lock, ArrowRight, CheckCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement reset password API call with token
    console.log('Reset password:', { token, password, confirmPassword });
    setSubmitted(true);
  };

  return (
    <div className="auth-layout">
      <div className="auth-container animate-in">
        <div className="auth-card">
          <div className="auth-brand">
            <div className="auth-brand-icon">M</div>
            <h2>Set new password</h2>
            <p>Enter your new password below</p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0, 184, 148, 0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <CheckCircle style={{ color: 'var(--accent-success)', width: 24, height: 24 }} />
              </div>
              <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Password reset successful
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                Your password has been updated. You can now sign in.
              </p>
              <Link to="/login" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                Go to Login
                <ArrowRight />
              </Link>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="reset-password">
                  <Lock style={{ width: 14, height: 14, display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  New Password
                </label>
                <input
                  id="reset-password"
                  type="password"
                  className="form-input"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reset-confirm">
                  <Lock style={{ width: 14, height: 14, display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  Confirm New Password
                </label>
                <input
                  id="reset-confirm"
                  type="password"
                  className="form-input"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Reset Password
                <ArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
