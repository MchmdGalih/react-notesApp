import React from "react";
import { showFormattedDate } from "../utils";

const NoteItem = ({ notes, onDeleteNoteHandler, onHandlerArchiveNote }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__date">{showFormattedDate(notes.createdAt)}</p>
        <h3 className="note-item__title">{notes.title}</h3>
        <p className="note-item__body">{notes.body}</p>
      </div>

      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteNoteHandler(notes.id)}
        >
          Hapus
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onHandlerArchiveNote(notes.id)}
        >
          {notes.archived ? "Diarsipkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
