import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Card, CardDeck, Button } from "react-bootstrap";

function People() {
  const mockData = [
    {
      name: "Bettina Kemme",
      title: "Director of the School",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~kemme/",
      phone: "514-398-8930",
      email: "kemme@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Kemme.jpg",
    },
    {
      name: "Mathieu Blanchette",
      title: "Associate Director of Research",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~blanchem/",
      phone: "514-398-8930",
      email: "blanchem@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Blanchette.jpg",
    },
    {
      name: "Oana Balmau",
      title: "Professor",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~balmau",
      phone: "514-398-8930",
      email: "oana.balmau@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Oana-Balmau-7-low.jpg",
    },
    {
      name: "Xiao-Wen Chang",
      title: "Professor",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~chang/",
      phone: "514-398-8930",
      email: "oana.balmau@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Chang.jpg",
    },
    {
      name: "Claude Crepeau",
      title: "Professor",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~crepeau",
      phone: "514-398-8930",
      email: "oana.balmau@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Crepeau.jpg",
    },
    {
      name: "Luc Devroye",
      title: "Professor",
      topics: [
        "Databases",
        "Networks",
        "Parallel and Distributed Computing",
        "Computer Games",
      ],
      website: "https://www.cs.mcgill.ca/~devroye",
      phone: "514-398-8930",
      email: "oana.balmau@cs.mcgill.ca",
      imgURL: "https://www.cs.mcgill.ca/media/professors/Devroye.jpg",
    }
  ];

  const pageStyle = {
    margin: "auto",
  };

  const cardDeckStyle = {
    width: "100%",
    margin: "auto",
    padding: "0 0 15px 0"
  };

  const titleStyles = {
    padding: "10px 0 10px 15px"
  }

  const director = [];
  const directorResearch = [];
  const professors = [];
  const facultyLecturers = [];
  const associateMembers = [];
  const adjunctProfessors = [];

  function cardifyPerson(person) {
    return (
      <Card style={{ minWidth: "200px", maxWidth: "25%"}}>
        <Card.Img variant="top" src={person.imgURL} />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" href={person.website}>
            Website
          </Button>
        </Card.Body>
      </Card>
    );
  }

  function makeDecks(persons, jsx) {
    for (var index = 0; index < persons.length; index += 3) {
      if (persons[index + 2]) {
        jsx.push(
          <CardDeck style={cardDeckStyle}>
            {cardifyPerson(persons[index])}
            {cardifyPerson(persons[index + 1])}
            {cardifyPerson(persons[index + 2])}
          </CardDeck>
        );
      } else if (persons[index + 1]) {
        jsx.push(
          <CardDeck style={cardDeckStyle}>
            {cardifyPerson(persons[index])}
            {cardifyPerson(persons[index + 1])}
          </CardDeck>
        );
      } else {
        jsx.push(
          <CardDeck style={cardDeckStyle}>
            {cardifyPerson(persons[index])}
          </CardDeck>
        );
      }
    }
  }

  makeDecks(mockData.filter((x) => x.title === "Director of the School"), director);
  makeDecks(mockData.filter((x) => x.title === "Associate Director of Research"), directorResearch);
  makeDecks(mockData.filter((x) => x.title === "Professor"), professors);
  makeDecks(mockData.filter((x) => x.title === "Lecturer"), facultyLecturers);

  return (
    <div>
      <h4 style={titleStyles}>Director of the School</h4>
      {director}
      <h4 style={titleStyles}>Associate Director of Research</h4>
      {directorResearch}
      <h4 style={titleStyles}>Professors</h4>
      {professors}
      <h4 style={titleStyles}>Faculty Lecturers</h4>
      {facultyLecturers}
    </div>
  );
}

export default People;
