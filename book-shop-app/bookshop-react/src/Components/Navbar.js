import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="design">
        logo
        <span>
          <h1>Book Shop</h1>
        </span>
      </div>
      <ul>
        <li className="li-class">Book List</li>
        <li className="li-class">Add Book</li>
        <li className="li-class">User List</li>
      </ul>
    </nav>
  );
};
