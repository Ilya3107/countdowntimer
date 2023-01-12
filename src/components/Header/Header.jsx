import React from "react";

function Header({ title }) {
  return (
    <header className="header">
      <div className="header__title">{title}</div>
    </header>
  );
}

export default Header;
