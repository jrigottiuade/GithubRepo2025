import React from "react";
import NavItems from "./NavItems";
import NavLink from "./NavLink";

const NavDesktop = () => {
  return (
    <div>
      <ul>{NavItems.map((item) => (
        <li key={item.id} className="pb-3">
            <NavLink {...item} />
        </li>
      ))}</ul>
    </div>
  );
};

export default NavDesktop;
