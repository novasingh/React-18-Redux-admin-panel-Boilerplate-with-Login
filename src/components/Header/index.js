import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Logo";
import Avatar from "react-avatar";
import PropTypes from 'prop-types';
import DropdownMenu from "../DropdownMenu";
import { useNavigate } from "react-router-dom";

const Header = ({ handleLogout, user }) => {
  const navigate = useNavigate();
  return (
    <Navbar sticky="top" className="header">
      <Container fluid className="px-4">
        <Navbar.Brand to="/">
            <Logo />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <DropdownMenu
            menu={[
              {
                label: "Account",
                onClick: () => navigate("/account")
              },
              {
                label: "Logout",
                onClick: () => handleLogout()
              }
            ]}
            style={{
              button: {
                padding: 0
              },
              menu: {
                minWidth: 150
              }
            }}
            icon={
              <Avatar
                src={user && user?.avatar ? user?.avatar : null}
                name={`${user?.firstName || 'Test'}`}
                size="32"
                className="ff-primary"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}
              />
            }
          />
        </Nav>
      </Container>
    </Navbar>
  )
}
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

Header.defaultProps = {}
export default Header;