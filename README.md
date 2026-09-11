# Notes App — React Frontend (Week 5)

A React frontend that connects to the Notes REST API built in Week 4. Users can view, add, and delete notes through a clean browser interface.

## Project Structure

```
week5/
├── src/
│   ├── components/
│   │   ├── AddNoteForm.jsx   # Form to create a new note
│   │   ├── NoteList.jsx      # Renders the list of notes
│   │   └── NoteCard.jsx      # Single note card with delete button
│   ├── App.jsx               # Root component — state + API calls
│   ├── App.css               # All styles
│   └── main.jsx              # React entry point
├── vite.config.js            # Vite config with API proxy
├── package.json
└── README.md
```

## Prerequisites

Make sure the **Week 4 backend API** is running before starting the frontend.

```bash
cd ../week4
npm start
# Server running at http://localhost:3000
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open your browser at `http://localhost:5173`

## React Concepts Used

| Concept | Where Used |
|---|---|
| `useState` | Notes array, form inputs, loading/error state |
| `useEffect` | Fetch all notes on page load |
| Components & JSX | App, AddNoteForm, NoteList, NoteCard |
| Props | onAdd, onDelete, note passed between components |
| Fetch API | GET, POST, DELETE requests to the backend |
| Loading state | Shown while notes are being fetched |
| Error state | Shown if the API is unreachable |

## Features

- View all notes fetched from MongoDB via the API
- Add a new note with title and optional content
- Delete any note with a single click
- Loading indicator while data is being fetched
- Error message if the backend is not running
- Empty state message when no notes exist

## How It Works

1. On load, `useEffect` in `App.jsx` calls `GET /api/notes`
2. Notes are stored in `useState` and passed as props to `NoteList`
3. `NoteList` renders a `NoteCard` for each note
4. `AddNoteForm` has its own local state for the form inputs
5. On submit, it calls `POST /api/notes` and calls `onAdd` prop to update the list
6. `NoteCard` calls `onDelete` prop which triggers `DELETE /api/notes/:id`

---
*Week 5 project — React Frontend connected to Express + MongoDB API*
