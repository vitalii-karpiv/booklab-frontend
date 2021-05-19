import { NavLink } from 'react-router-dom';
import paths from '../../router/paths';

export default function AuthLayout(props) {
  const { children } = props;
  return (
    <>
      <header className="bg-red-300 h-16">
        <nav className="w-5/6 mx-auto md:w-4/5 mx-auto md:container md:mx-auto flex justify-between h-full items-center">
          <span className="text-lg">BookLab</span>
          <div className="flex justify-between md:w-40 sm:w-36">
            <NavLink to={paths.login} className="bg-red-600 p-1 rounded px-2 text-white hover:bg-red-700 mr-2">
              Login
            </NavLink>
            <NavLink to={paths.signup} className="bg-red-600 p-1 rounded px-2 text-white hover:bg-red-700">
              SignUp
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="md:container md:mx-auto">{children}</div>
    </>
    // <>
    //   <Navbar style={{ background: "lightgreen" }} expand="sm">
    //     <Container>
    //       <Col sm={10} md={10} lg={2}>
    //         <Navbar.Brand as={Link} to="/">
    //           BookLab
    //         </Navbar.Brand>
    //       </Col>
    //       <Col>
    //         <Nav className="mr-auto d-flex">
    //           <Nav.Link as={Link} to={paths.login} onClick={onLogin}>
    //             Login
    //           </Nav.Link>
    //           <Nav.Link as={Link} to={paths.signup}>
    //             SignUp
    //           </Nav.Link>
    //         </Nav>
    //       </Col>
    //     </Container>
    //   </Navbar>
    //   <Container>{children}</Container>
    // </>
  );
}
