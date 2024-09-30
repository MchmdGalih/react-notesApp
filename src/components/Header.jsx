import React from "react";
import Search from "./Search";
const Header = ({ onHandlerSearch }) => {
  return (
    <div className="note-app__header">
      <h1>Notes </h1>
      <Search onHandlerSearch={onHandlerSearch} />
    </div>
  );
};

export default Header;
