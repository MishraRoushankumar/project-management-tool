import { Plus, Users, MoreVertical, Mail, Shield } from 'lucide-react';

// Placeholder data – will be replaced with API calls
const members: {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'project_admin' | 'member';
  avatar: string;
}[] = [];

const roleLabels: Record<string, string> = {
  admin: 'Admin',
  project_admin: 'Project Admin',
  member: 'Member',
};

const roleBadgeClass: Record<string, string> = {
  admin: 'badge-purple',
  project_admin: 'badge-teal',
  member: 'badge-green',
};

export default function MembersPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Team Members</h1>
            <p className="page-subtitle">Manage your project team and roles</p>
          </div>
          <button className="btn btn-primary">
            <Plus />
            Invite Member
          </button>
        </div>
      </div>

      <div className="page-body">
        {members.length === 0 ? (
          <div className="empty-state animate-in">
            <div className="empty-state-icon">
              <Users />
            </div>
            <h3>No team members</h3>
            <p>Invite team members to collaborate on projects together.</p>
            <button className="btn btn-primary">
              <Plus />
              Invite Member
            </button>
          </div>
        ) : (
          <div className="animate-in">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <div className="sidebar-avatar">{member.avatar}</div>
                          <span style={{ fontWeight: 500 }}>{member.name}</span>
                        </div>
                      </td>
                      <td>
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <Mail style={{ width: 14, height: 14 }} />
                          {member.email}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${roleBadgeClass[member.role]}`}>
                          <Shield style={{ width: 12, height: 12 }} />
                          {roleLabels[member.role]}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-sm">
                          <MoreVertical />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
