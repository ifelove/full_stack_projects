import React from "react";
import { useNavigate, NavLink } from "react-router-dom";


export const Navbar = () => {
 //const  navigate=useNavigate()
  return (
    <nav>
      <div className="design">
        <span className="logo">🕮</span>
        <span>
          <h1>Book Shop</h1>
        </span>
      </div>
      <ul>
        <NavLink to="/">
          <li className="li-class">Home</li>
        </NavLink>
        <NavLink to="/booklist">
          <li className="li-class">Book List</li>
        </NavLink>
        <NavLink to="/addbook">
          <li className="li-class">Add Book</li>
        </NavLink>
      </ul>
    </nav>
  );
};
