import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ link: link, name: name }) => {
  return (
    <div>
      <Link className="hover:text-gray-500" to={link}>{name}</Link>
    </div>
  );
};

export default NavLink;
