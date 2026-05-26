import { Link } from 'react-router-dom';
import { Plus, FolderKanban, Users, MoreVertical } from 'lucide-react';

// Placeholder data – will be replaced with API calls
const projects: {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  taskCount: number;
  status: string;
}[] = [];

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Projects</h1>
            <p className="page-subtitle">Manage and organize your team's projects</p>
          </div>
          <button className="btn btn-primary">
            <Plus />
            New Project
          </button>
        </div>
      </div>

      <div className="page-body">
        {projects.length === 0 ? (
          <div className="empty-state animate-in">
            <div className="empty-state-icon">
              <FolderKanban />
            </div>
            <h3>No projects yet</h3>
            <p>Create your first project to start organizing your team's work.</p>
            <button className="btn btn-primary">
              <Plus />
              Create Project
            </button>
          </div>
        ) : (
          <div className="grid-cards animate-in">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card card-hoverable">
                  <div className="card-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 'var(--radius-md)',
                          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 700,
                        }}
                      >
                        {project.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="card-title">{project.name}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm">
                      <MoreVertical />
                    </button>
                  </div>
                  <p className="card-description">{project.description}</p>
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--space-4)',
                      marginTop: 'var(--space-4)',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Users style={{ width: 14, height: 14 }} />
                      {project.memberCount} members
                    </span>
                    <span>{project.taskCount} tasks</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
