import { Link } from 'react-router-dom';
import {
  FolderKanban,
  CheckSquare,
  Users,
  StickyNote,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">Welcome back! Here's an overview of your workspace.</p>
          </div>
        </div>
      </div>

      <div className="page-body">
        {/* Stats Grid */}
        <div
          className="animate-in"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <div className="card">
            <div className="stat-card">
              <div className="stat-icon stat-icon-purple">
                <FolderKanban />
              </div>
              <div>
                <div className="stat-value">0</div>
                <div className="stat-label">Active Projects</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="stat-card">
              <div className="stat-icon stat-icon-teal">
                <CheckSquare />
              </div>
              <div>
                <div className="stat-value">0</div>
                <div className="stat-label">Total Tasks</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="stat-card">
              <div className="stat-icon stat-icon-green">
                <TrendingUp />
              </div>
              <div>
                <div className="stat-value">0</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="stat-card">
              <div className="stat-icon stat-icon-yellow">
                <Users />
              </div>
              <div>
                <div className="stat-value">0</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-in" style={{ animationDelay: '100ms' }}>
          <h2
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Quick Actions
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}
          >
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <div className="card card-hoverable">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div className="stat-icon stat-icon-purple">
                      <FolderKanban />
                    </div>
                    <div>
                      <div className="card-title">View Projects</div>
                      <div className="card-description">Manage your project portfolio</div>
                    </div>
                  </div>
                  <ArrowRight style={{ color: 'var(--text-tertiary)', width: 18, height: 18 }} />
                </div>
              </div>
            </Link>

            <Link to="/tasks" style={{ textDecoration: 'none' }}>
              <div className="card card-hoverable">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div className="stat-icon stat-icon-teal">
                      <CheckSquare />
                    </div>
                    <div>
                      <div className="card-title">My Tasks</div>
                      <div className="card-description">View and manage your tasks</div>
                    </div>
                  </div>
                  <ArrowRight style={{ color: 'var(--text-tertiary)', width: 18, height: 18 }} />
                </div>
              </div>
            </Link>

            <Link to="/notes" style={{ textDecoration: 'none' }}>
              <div className="card card-hoverable">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div className="stat-icon stat-icon-yellow">
                      <StickyNote />
                    </div>
                    <div>
                      <div className="card-title">Notes</div>
                      <div className="card-description">Browse project notes</div>
                    </div>
                  </div>
                  <ArrowRight style={{ color: 'var(--text-tertiary)', width: 18, height: 18 }} />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="animate-in" style={{ animationDelay: '200ms' }}>
          <h2
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Recent Activity
          </h2>
          <div className="card">
            <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                No recent activity yet. Start by creating a project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
