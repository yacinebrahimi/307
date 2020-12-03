import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">CS @ McGill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#prospective">Prospective</Nav.Link>
            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item href="#action/3.1">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Graduate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Teaching Assistant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Funding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#research">Research</Nav.Link>
            <Nav.Link href="#people">People</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
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

export default App;
