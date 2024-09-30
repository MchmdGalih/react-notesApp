import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxLength: 50,
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.title === "" || this.state.body === "") {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    } else {
      this.props.onAddNoteHandler(this.state);
    }

    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {this.state.maxLength - this.state.title.length}
        </p>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <input
            type="text"
            className="note-input__title"
            placeholder="Judul..."
            value={this.state.title}
            onChange={(event) =>
              this.setState({
                title: event.target.value.slice(0, this.state.maxLength),
              })
            }
          />

          <textarea
            className="note-input__body"
            placeholder="Tuliskan isi catatan..."
            value={this.state.body}
            onChange={(event) => this.setState({ body: event.target.value })}
          />

          <button type="submit" className="note-input__submit">
            Simpan
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
