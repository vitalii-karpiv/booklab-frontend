import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

export default function AuthLayout(props) {
  const { children, onLogin } = props;
  return (
    <>
      <Navbar style={{ background: "lightgreen" }} expand="sm">
        <Container className="d-flex justify-content-between">
          <Col sm={10} md={10} lg={2}>
            <Navbar.Brand as={Link} to="/">
              BookLab
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="mr-auto d-flex">
              <Nav.Link as={Link} to={paths.login} onClick={onLogin}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={paths.signup}>
                SignUp
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
      {children}
    </>
  );
}
