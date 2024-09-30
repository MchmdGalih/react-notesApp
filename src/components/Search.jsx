import React from "react";

const Search = ({ onHandlerSearch }) => {
  const handlerSearchInput = (event) => {
    onHandlerSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={handlerSearchInput}
      />
    </div>
  );
};
export default Search;
