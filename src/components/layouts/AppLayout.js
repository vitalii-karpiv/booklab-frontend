import React from "react";
import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

export default function AppLayout(props) {
  const { children, onLogout } = props;
  return (
    <>
      <Navbar style={{ background: "lightgreen" }} expand="sm">
        <Container className="d-flex justify-content-between">
          <Col sm={10} md={10} lg={2}>
            <Navbar.Brand as={Link} to="/">
              BookLab
            </Navbar.Brand>
          </Col>
          <Col md={2}>
            <Nav className="mr-auto d-flex">
              <Nav.Link as={Link} to={paths.login} onClick={onLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
      {children}
    </>
  );
}
