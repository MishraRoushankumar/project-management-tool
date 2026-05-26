import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, Settings, CheckSquare, StickyNote, Users } from 'lucide-react';

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();

  // Determine active tab
  const path = location.pathname;
  const activeTab = path.includes('/tasks')
    ? 'tasks'
    : path.includes('/notes')
      ? 'notes'
      : path.includes('/members')
        ? 'members'
        : 'overview';

  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <Link to="/projects" className="btn btn-ghost btn-sm">
              <ArrowLeft />
            </Link>
            <div>
              <h1 className="page-title">Project Details</h1>
              <p className="page-subtitle">Project ID: {projectId}</p>
            </div>
          </div>
          <button className="btn btn-secondary">
            <Settings style={{ width: 16, height: 16 }} />
            Settings
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs" style={{ marginTop: 'var(--space-4)', marginBottom: 0 }}>
          <Link
            to={`/projects/${projectId}`}
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          >
            Overview
          </Link>
          <Link
            to={`/projects/${projectId}/tasks`}
            className={`tab ${activeTab === 'tasks' ? 'active' : ''}`}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckSquare style={{ width: 14, height: 14 }} />
              Tasks
            </span>
          </Link>
          <Link
            to={`/projects/${projectId}/notes`}
            className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <StickyNote style={{ width: 14, height: 14 }} />
              Notes
            </span>
          </Link>
          <Link
            to={`/projects/${projectId}/members`}
            className={`tab ${activeTab === 'members' ? 'active' : ''}`}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Users style={{ width: 14, height: 14 }} />
              Members
            </span>
          </Link>
        </div>
      </div>

      <div className="page-body animate-in">
        {/* Render sub-route or default overview */}
        {activeTab === 'overview' && !location.pathname.includes('/tasks') && !location.pathname.includes('/notes') && !location.pathname.includes('/members') ? (
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: 'var(--space-3)' }}>
              Project Overview
            </h3>
            <p className="card-description">
              Project details and summary will appear here once the backend is connected.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-6)',
              }}
            >
              <div className="card" style={{ background: 'var(--bg-tertiary)' }}>
                <div className="stat-card">
                  <div>
                    <div className="stat-value">0</div>
                    <div className="stat-label">Tasks</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ background: 'var(--bg-tertiary)' }}>
                <div className="stat-card">
                  <div>
                    <div className="stat-value">0</div>
                    <div className="stat-label">Members</div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ background: 'var(--bg-tertiary)' }}>
                <div className="stat-card">
                  <div>
                    <div className="stat-value">0</div>
                    <div className="stat-label">Notes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}
