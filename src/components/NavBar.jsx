import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="nav-container">
      <Link to={"/"}>Home</Link> | <Link to={"/new"}>Add A Puppy</Link>
    </div>
  );
}
