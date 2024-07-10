import React from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "/src/styles/Top_Navbar.css";


function Header()
{const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },
    {
      name: "Contact",
      slug: "/contact",
    },
    {
      name: "Login",
      slug: "/login",
    },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-items">
          {navItems.map((item, index) => (
            <NavLink
              to={item.slug}
              key={index}
              activeClassName="active"
              className="nav-link"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;