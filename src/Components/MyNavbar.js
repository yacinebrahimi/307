import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function MyNavbar() {

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
        <Navbar.Brand href="home">CS @ McGill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Prospective" id="prospective-dropdown">
              <NavDropdown.Item href="generalinfo">General Info</NavDropdown.Item>
              <NavDropdown.Item href="whycs">Why CS?</NavDropdown.Item>
              <NavDropdown.Item href="cegep">CEGEP</NavDropdown.Item>
              <NavDropdown.Item href="freshman">Freshman</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="separatedlink">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Academics" id="academics-dropdown">
              <NavDropdown.Item href="undergraduate">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item href="graduate">Graduate</NavDropdown.Item>
              <NavDropdown.Item href="courses">Courses</NavDropdown.Item>
              <NavDropdown.Item href="ta">Teaching Assistant</NavDropdown.Item>
              <NavDropdown.Item href="funding">Funding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="separatedlink">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research" id="research-dropdown">
              <NavDropdown.Item href="areas">Areas</NavDropdown.Item>
              <NavDropdown.Item href="techreports">Tech Reports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="separatedlink">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
                <Link to="/people">People</Link>
            </Nav.Link>

            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="facilities">Facilities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="internal">Internal</NavDropdown.Item>
            </NavDropdown>

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
