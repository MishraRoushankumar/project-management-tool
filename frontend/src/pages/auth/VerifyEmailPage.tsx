import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, ArrowRight } from 'lucide-react';

export default function VerifyEmailPage() {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // TODO: Implement email verification API call with token
    console.log('Verifying email with token:', token);
    // Simulate API call
    const timer = setTimeout(() => {
      setStatus('success');
    }, 2000);
    return () => clearTimeout(timer);
  }, [token]);

  return (
    <div className="auth-layout">
      <div className="auth-container animate-in">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <div className="auth-brand">
            <div className="auth-brand-icon">M</div>
          </div>

          {status === 'loading' && (
            <>
              <Loader2
                style={{
                  width: 48,
                  height: 48,
                  color: 'var(--accent-primary)',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto var(--space-4)',
                }}
              />
              <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Verifying your email...
              </h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Please wait a moment.
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </>
          )}

          {status === 'success' && (
            <>
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
              <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Email verified!
              </h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                Your email has been verified successfully.
              </p>
              <Link to="/login" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                Continue to Login
                <ArrowRight />
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(225, 112, 85, 0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <XCircle style={{ color: 'var(--accent-danger)', width: 24, height: 24 }} />
              </div>
              <h2 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                Verification failed
              </h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                The verification link is invalid or has expired.
              </p>
              <Link to="/login" className="btn btn-secondary" style={{ display: 'inline-flex' }}>
                Back to Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
