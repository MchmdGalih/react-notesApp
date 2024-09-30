import React from "react";
import Header from "./Header";
import NotesBody from "./NotesBody";
import Swal from "sweetalert2";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onHandlerSearch = this.onHandlerSearch.bind(this);
    this.onHandlerArchiveNote = this.onHandlerArchiveNote.bind(this);
    this.onHandlerSearch = this.onHandlerSearch.bind(this);
  }

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
          ...prevState.notes,
        ],
      };
    });
    Swal.fire({
      title: "Berhasil!",
      text: "Catatan berhasil ditambahkan.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  onDeleteNoteHandler = (id) => {
    Swal.fire({
      title: "Apa anda yakin?",
      text: "Catatan yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState((prevState) => {
          return {
            notes: prevState.notes.filter((note) => note.id !== id),
          };
        });
        Swal.fire("Terhapus!", "Catatan telah dihapus.", "success");
      }
    });
  };

  onHandlerSearch(keyword) {
    this.setState({ searchQuery: keyword });
  }

  onHandlerArchiveNote = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return (
        note.title
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    });

    return (
      <div className="note-app">
        <Header onHandlerSearch={this.onHandlerSearch} />
        <NotesBody
          notes={filteredNotes}
          onAddNoteHandler={this.onAddNoteHandler}
          onDeleteNoteHandler={this.onDeleteNoteHandler}
          onHandlerArchiveNote={this.onHandlerArchiveNote}
        />
      </div>
    );
  }
}

export default NoteApp;
