import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="home">CS @ McGill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="prospective">Prospective</Nav.Link>
            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item href="undergraduate">
                Undergraduate
              </NavDropdown.Item>
              <NavDropdown.Item href="graduate">Graduate</NavDropdown.Item>
              <NavDropdown.Item href="courses">Courses</NavDropdown.Item>
              <NavDropdown.Item href="ta">Teaching Assistant</NavDropdown.Item>
              <NavDropdown.Item href="funding">Funding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="separatedlink">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Research</Nav.Link>
            <Nav.Link>
                <Link to="/people">People</Link>
            </Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
