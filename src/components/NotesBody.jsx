import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
const NotesBody = ({
  notes,
  onAddNoteHandler,
  onDeleteNoteHandler,
  onHandlerArchiveNote,
}) => {
  return (
    <div className="note-app__body">
      <NoteInput onAddNoteHandler={onAddNoteHandler} />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes.filter((note) => !note.archived)}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onHandlerArchiveNote={onHandlerArchiveNote}
      />

      <h2>Arsip</h2>
      <NotesList
        notes={notes.filter((note) => note.archived)}
        onDeleteNoteHandler={onDeleteNoteHandler}
        onHandlerArchiveNote={onHandlerArchiveNote}
      />
    </div>
  );
};

export default NotesBody;
