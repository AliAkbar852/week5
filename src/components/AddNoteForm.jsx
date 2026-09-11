import { useState } from 'react';

function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add note');
      }

      const newNote = await response.json();
      onAdd(newNote);
      setTitle('');
      setContent('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-form">
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-msg">{error}</p>}
        <input
          type="text"
          placeholder="Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content (optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Note'}
        </button>
      </form>
    </div>
  );
}

export default AddNoteForm;
