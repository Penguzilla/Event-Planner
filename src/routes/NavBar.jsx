import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container className="justify-content-center">
        <Nav className="mx-auto text-center">
          <Nav.Link as={Link} to="/" className="mx-3">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" className="mx-3">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/registration" className="mx-3">
            Registration
          </Nav.Link>
          <Nav.Link as={Link} to="/help" className="mx-3">
          Help
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}