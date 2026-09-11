import { useState, useEffect } from 'react';
import './App.css';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/notes')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch notes');
        return res.json();
      })
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAdd = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, { method: 'DELETE' });

      if (!response.ok) throw new Error('Failed to delete note');

      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="app">
      <h1>📝 My Notes</h1>
      <AddNoteForm onAdd={handleAdd} />
      {loading && <p className="loading">Loading notes...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <NoteList notes={notes} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
