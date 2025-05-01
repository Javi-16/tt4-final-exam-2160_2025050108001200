function ApplicationList({ applications, onDelete, onEdit, editingId }) {
    return (
      <div>
        <h2>Applications</h2>
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <ul>
            {applications.map((app) => (
              <li key={app.id}>
                <strong>{app.company}</strong> - {app.position} (
                {app.status}) on {app.appliedDate}
                <button onClick={() => onEdit(app)}>Edit</button>
                {/* 👇 Only show delete button if this isn't the app being edited */}
                {editingId !== app.id && (
                  <button onClick={() => onDelete(app.id)}>Delete</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  
  export default ApplicationList;
  