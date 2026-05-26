import { Plus, StickyNote, MoreVertical } from 'lucide-react';

// Placeholder data – will be replaced with API calls
const notes: {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}[] = [];

export default function NotesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <h1 className="page-title">Notes</h1>
            <p className="page-subtitle">Keep track of important project information</p>
          </div>
          <button className="btn btn-primary">
            <Plus />
            Add Note
          </button>
        </div>
      </div>

      <div className="page-body">
        {notes.length === 0 ? (
          <div className="empty-state animate-in">
            <div className="empty-state-icon">
              <StickyNote />
            </div>
            <h3>No notes yet</h3>
            <p>Add notes to keep important project information and decisions documented.</p>
            <button className="btn btn-primary">
              <Plus />
              Create Note
            </button>
          </div>
        ) : (
          <div className="grid-cards animate-in">
            {notes.map((note) => (
              <div key={note.id} className="card card-hoverable" style={{ cursor: 'pointer' }}>
                <div className="card-header">
                  <div className="card-title">{note.title}</div>
                  <button className="btn btn-ghost btn-sm">
                    <MoreVertical />
                  </button>
                </div>
                <p
                  className="card-description"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {note.content}
                </p>
                <div
                  style={{
                    marginTop: 'var(--space-4)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {note.createdAt}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
