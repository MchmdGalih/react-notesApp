import React from "react";
import NoteItem from "./NoteItem";
const NotesList = ({ notes, onDeleteNoteHandler, onHandlerArchiveNote }) => {
  if (!notes.length) {
    return (
      <div className="notes-list__empty-message">
        <p>Tidak ada catatan!</p>
      </div>
    );
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            notes={note}
            onDeleteNoteHandler={onDeleteNoteHandler}
            onHandlerArchiveNote={onHandlerArchiveNote}
          />
        ))}
      </div>
    );
  }
};

export default NotesList;
