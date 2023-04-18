import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";

const Sidebar = () => {

  return (
    <aside className="pe-3">
        <Nav className="flex-column pe-4">
            <NavItem as={NavLink} to={`/dashboard`} className="ps-4">
             Dashboard
            </NavItem>
        </Nav>
    </aside>
  );
};

export default Sidebar;