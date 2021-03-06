import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import {useState} from "react";

function MyNavbar() {

  const [input, setInput] = useState("");

  const bannerStyle = {
    color: "white",
    backgroundColor: "#232d52",
    width: "100%",
    height: "80px",
    padding: "0px 0px 0px 20px",
    display: "flex"
  }

  const logoStyle = {
    width: "70px",
    height: "70px",
  }

  const navbarStyle = {
    borderColor: "#7f7f7f",
    borderStyle: "solid",
    borderWidth: "0px 0px 1px 0px"
  }

  const verticalBarStyle = {
    color: "white",
    backgroundColor: "white",
    width: "2px",
    height: "70px",
    margin: "5px 10px 5px 30px"
  }

  const nameStyle = {
    margin: "auto",
    marginLeft: "10px"

  }

  return (
    <div>
      <div style={bannerStyle}>
        <img src="socs_logo_nobg.png" style={logoStyle}/>
        <div style={verticalBarStyle}/>
        <h4 style={nameStyle}> McGill School of Computer Science</h4>
      </div>

      <Navbar variant="light" expand="lg" style={navbarStyle}>
        <Navbar.Brand  as={Link} to="/home">CS @ McGill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="News" id="news-dropdown">
              <NavDropdown.Item as={Link} to="/news">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news">Events</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Prospective" id="prospective-dropdown">
              <NavDropdown.Item as={Link} to="/generalinfo">General Info</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/whycs">Why CS?</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cegep">CEGEP</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/freshman">Freshman</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item as={Link} to="/undergraduate">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/graduate">Graduate</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research" id="research-dropdown">
              <NavDropdown.Item as={Link} to="/areas">Areas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="People" id="people-dropdown">
              <NavDropdown.Item as={Link} to="/people">Faculty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/internal">Internal</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {setInput(e.target.value.replace(" ", "+"))}}/>
            <Button variant="outline-success" href={"https://www.google.com/search?q=:mcgill.ca+" + input}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
