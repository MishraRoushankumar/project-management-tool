import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  StickyNote,
  Users,
  LogOut,
  Settings,
} from 'lucide-react';

export default function AppLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    navigate('/login');
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">M</div>
          <h1>Milestone</h1>
        </div>

        <nav className="sidebar-nav">
          <span className="sidebar-section-label">General</span>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <LayoutDashboard />
            Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <FolderKanban />
            Projects
          </NavLink>

          <span className="sidebar-section-label">Workspace</span>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <CheckSquare />
            My Tasks
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <StickyNote />
            Notes
          </NavLink>

          <NavLink
            to="/members"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Users />
            Team Members
          </NavLink>

          <span className="sidebar-section-label">Account</span>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Settings />
            Settings
          </NavLink>

          <button className="sidebar-link" onClick={handleLogout}>
            <LogOut />
            Logout
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">JD</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">John Doe</div>
              <div className="sidebar-user-role">Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
