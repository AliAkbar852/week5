import NoteCard from './NoteCard';

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p className="empty">No notes yet. Add one above!</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
