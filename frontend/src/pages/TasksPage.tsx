import { Plus, CheckSquare, MoreVertical } from 'lucide-react';

// Placeholder data – will be replaced with API calls
const tasks: {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'done';
  assignee: string;
  subtaskCount: number;
}[] = [];

const statusLabels: Record<string, string> = {
  todo: 'To Do',
  in_progress: 'In Progress',
  done: 'Done',
};

const statusClass: Record<string, string> = {
  todo: 'status-todo',
  in_progress: 'status-in-progress',
  done: 'status-done',
};

export default function TasksPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Tasks</h1>
            <p className="page-subtitle">Track and manage your team's work</p>
          </div>
          <button className="btn btn-primary">
            <Plus />
            Add Task
          </button>
        </div>
      </div>

      <div className="page-body">
        {tasks.length === 0 ? (
          <div className="empty-state animate-in">
            <div className="empty-state-icon">
              <CheckSquare />
            </div>
            <h3>No tasks yet</h3>
            <p>Create your first task to start tracking work in this project.</p>
            <button className="btn btn-primary">
              <Plus />
              Create Task
            </button>
          </div>
        ) : (
          <div className="animate-in">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Assignee</th>
                    <th>Subtasks</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} style={{ cursor: 'pointer' }}>
                      <td>
                        <div style={{ fontWeight: 500 }}>{task.title}</div>
                        <div
                          style={{
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--text-tertiary)',
                            marginTop: 2,
                          }}
                        >
                          {task.description}
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${statusClass[task.status]}`}>
                          {statusLabels[task.status]}
                        </span>
                      </td>
                      <td style={{ color: 'var(--text-secondary)' }}>{task.assignee}</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{task.subtaskCount}</td>
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
