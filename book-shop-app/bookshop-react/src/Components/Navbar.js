import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="design">
        <span className="logo">🕮</span>
        <span>
          <h1>Book Shop</h1>
        </span>
      </div>
      <ul>
        <li className="li-class">Home</li>
        <li className="li-class">Book List</li>
        <li className="li-class">Add Book</li>
      </ul>
    </nav>
  );
};
