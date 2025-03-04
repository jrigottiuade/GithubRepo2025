import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ link: link, name: name }) => {
  return (
    <div>
      <Link to={link}>{name}</Link>
    </div>
  );
};

export default NavLink;
