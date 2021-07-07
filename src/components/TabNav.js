import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "../App.css";

import Header from "./Header";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" activeClassName="activeNavButton">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations" activeClassName="activeNavButton">
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodes" activeClassName="activeNavButton">
            Episodes
          </NavLink>
        </li>
      </ul>

      <Header />
    </div>
  );
}
