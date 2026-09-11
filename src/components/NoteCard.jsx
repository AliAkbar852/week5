function NoteCard({ note, onDelete }) {
  const date = new Date(note.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="note-card">
      <div className="note-card-body">
        <h3>{note.title}</h3>
        {note.content && <p>{note.content}</p>}
        <p className="date">{date}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(note._id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteCard;
