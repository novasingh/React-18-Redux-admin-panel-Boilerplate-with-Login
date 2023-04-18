import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../../components/Logo";

const BlankLayout = ({ children }) => {
  return (
    <div className="w-100 h-100 layout--blank blank">
      <Navbar fixed="top" className="header">
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/">
          < Logo />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="px-0 content">
        <Outlet />
      </Container>
    </div>
  );
};

export default BlankLayout;
