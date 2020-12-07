import { Card, CardDeck, Button, Modal, Form } from "react-bootstrap";

import { useEffect, useState } from "react";

import { useCookies } from "react-cookie";

function People() {
  const [people, setPeople] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies([
    "username",
    "password",
  ]);

  var refresh = 0;

  const form = {
    title: "Professor",
  };

  var toDelete = "-1";

  const peopleOptions = [];
  people.forEach((x) => peopleOptions.push(<option>{x.name}</option>));

  const onDeleteChange = (e) => {
    toDelete = people.find((x) => x.name === e.target.value).id.toString();
    console.log(toDelete);
  };

  const onDeleteSubmit = async () => {
    const rawResponse = await fetch(
      "http://fall2020-comp307.cs.mcgill.ca:8020/api/people/faculty/" +
        toDelete,
      {
        method: "DELETE",
      }
    );
    console.log(rawResponse);
    setShowDeleteModal(false);
  };

  const onTitleChange = (e) => {
    form["title"] = e.target.value;
    console.log(form);
  };

  const onWebsiteURLChange = (e) => {
    form["websiteurl"] = e.target.value;
  };

  const onImgURLChange = (e) => {
    form["imgurl"] = e.target.value;
  };

  const onNameChange = (e) => {
    form["name"] = e.target.value;
  };

  const onAddSubmit = async () => {
    const rawResponse = await fetch(
      "http://fall2020-comp307.cs.mcgill.ca:8020/api/people/faculty",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    console.log(rawResponse);

    refresh++;
    setShowAddModal(false);
  };

  useEffect(() => {
    fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/people/faculty")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPeople(data);
      })
      .catch(console.log);
  }, [refresh]);

  const cardStyle = {
    minWidth: "200px",
    maxWidth: "25%",
    padding: "10px 10px 10px 10px",
    margin: "auto",
  };

  const cardDeckStyle = {
    width: "100%",
    margin: "auto",
    padding: "0 0 15px 0",
    textAlign: "center",
  };

  const titleStyles = {
    padding: "10px 0 10px 15px",
  };

  const titleStyles2 = {
    padding: "10px 0 10px 0",
    textAlign: "center",
  };

  const director = [];
  const directorResearch = [];
  const professors = [];
  const facultyLecturers = [];
  //const associateMembers = [];
  //const adjunctProfessors = [];

  function cardifyPerson(person) {
    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={person.imgurl} />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" href={person.websiteurl}>
            Website
          </Button>
        </Card.Body>
      </Card>
    );
  }

  function makeDecks(persons, jsx) {
    const jsx2 = [];
    for (var i = 0; i < persons.length; i++) {
      jsx2.push(cardifyPerson(persons[i]));
    }
    jsx.push(<CardDeck style={cardDeckStyle}>{jsx2}</CardDeck>);
  }

  makeDecks(
    people.filter((x) => x.title === "Director of the School"),
    director
  );
  makeDecks(
    people.filter((x) => x.title === "Associate Director of Research"),
    directorResearch
  );
  makeDecks(
    people.filter((x) => x.title === "Professor"),
    professors
  );
  makeDecks(
    people.filter((x) => x.title === "Lecturer"),
    facultyLecturers
  );

  const deleteModal = (
    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
      <br />
      <Modal.Title className="text-center">Delete person</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Label>Person</Form.Label>
          <Form.Control as="select" onChange={onDeleteChange}>
            {peopleOptions}
          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-right">
        <Button variant="danger" onClick={onDeleteSubmit}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const addModal = (
    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
      <br />
      <Modal.Title className="text-center">Add person</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Label>Title</Form.Label>
          <Form.Control as="select" onChange={onTitleChange}>
            <option>Professor</option>
            <option>Faculty Lecturer</option>
            <option>Director of the School</option>
            <option>Associate Director of Research</option>
          </Form.Control>
          <br />
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            onChange={onNameChange}
          />
          <br />
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL"
            onChange={onWebsiteURLChange}
          />
          <br />
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL"
            onChange={onImgURLChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-right">
        <Button onClick={onAddSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );

  const editButtons = () => {
    if (cookies['username']){
      return (
        <div className="text-center">
        <Button
          variant="primary"
          style={{ margin: "5px 5px 5px 5px" }}
          onClick={() => setShowAddModal(true)}
        >
          Add
        </Button>
        <Button
          variant="danger"
          style={{ margin: "5px 5px 5px 5px" }}
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </Button>
      </div>
      )
    } else {
      return null;
    }
  }

  return (
    <div>
      {deleteModal}
      {addModal}
      {editButtons()}
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h4 style={titleStyles2}>Director of the School</h4>
          {director}
        </div>
        <div style={{ width: "50%" }}>
          <h4 style={titleStyles2}>Associate Director of Research</h4>
          {directorResearch}
        </div>
      </div>
      <h4 style={titleStyles}>Professors</h4>
      {professors}
      <h4 style={titleStyles}>Faculty Lecturers</h4>
      {facultyLecturers}
    </div>
  );
}

export default People;
