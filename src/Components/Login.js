import { useState, useEffect } from "react";
import { Form, Button, Container, Modal, Alert } from "react-bootstrap";
import { useCookies } from "react-cookie";

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "username",
    "password",
  ]);

  const [failed, setFailed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAddContent, setShowAddContent] = useState(false);
  const [content, setContent] = useState({
    mediatype: "teaching",
    title: "none",
    description: "none",
    date: "2020-12-07",
    imgurl: "none"
  });
  const [failedAdd, setFailedAdd] = useState(false);

  const form = {
    username: username,
    password: password,
  };

  const onContentTypeChange = (e) => {
    if (e.target.value === 'Home Page Carousel') setContent({ ...content, mediatype: "teaching" });
    if (e.target.value === 'News') setContent({ ...content, mediatype: "latest" });
    if (e.target.value === 'Event') setContent({ ...content, mediatype: "event" });
    if (e.target.value === 'General Info') setContent({ ...content, mediatype: "generalinf" });
    if (e.target.value === 'Undergraduate') setContent({ ...content, mediatype: "undergrad" });
    if (e.target.value === 'Why CS') setContent({ ...content, mediatype: "whycs" });
  };

  const onTitleChange = (e) => {
    setContent({ ...content, title: e.target.value });
  }

  const onDescriptionChange = (e) => {
    setContent({ ...content, description: e.target.value });
  }

  const onDateChange = (e) => {
    setContent({ ...content, date: e.target.value });
  }

  const onImageURLChange = (e) => {
    setContent({ ...content, imgurl: e.target.value });
  }

  const onAddContentSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...content, username: cookies['username'], password: cookies['password']}),
    }).then((res) => {
      if (res.status === 200) {
        setShowAddContent(false);
      } else {
        setFailedAdd(true);
      }
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 200) {
        setCookie("username", username);
        setCookie("password", password);
      } else {
        setFailed(true);
      }
    });
  };
  const wrongLabel = (
    <Form.Label style={{ color: "red" }}>Wrong username or password</Form.Label>
  );

  const loginPage = (
    <div style={{ width: "500px", margin: "auto" }}>
      <br />
      <Container>
        <Form
          style={{
            borderColor: "#1a2e4f",
            borderStyle: "solid",
            padding: "20px",
            borderRadius: "40px",
            minWidth: "200",
          }}
        >
          {failed ? wrongLabel : null}
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-right">
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Log in
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );

  const errorMessage = () => {
    if (failedAdd) {
      return (
        <Alert>
          Oops, something wrong occurred!
        </Alert>
      )
    } else {
      return null;
    }
  }

  const addContentModal = (
    <Modal show={showAddContent} onHide={() => setShowAddContent(false)}>
      <Modal.Header>
        {errorMessage()}
        <Modal.Title> Add Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>
            Content Type
              </Form.Label>
          <Form.Control as="select" onChange={onContentTypeChange}>
            <option>Home Page Carousel</option>
            <option>News</option>
            <option>Event</option>
            <option>General Info</option>
            <option>Undergraduate</option>
            <option>Why CS</option>
          </Form.Control>
          <Form.Label>
            Title
              </Form.Label>
          <Form.Control onChange={onTitleChange}></Form.Control>
          <Form.Label>
            Description
              </Form.Label>
          <Form.Control as="textarea" rows={5} onChange={onDescriptionChange}>
          </Form.Control>
          <Form.Label>
            Date
              </Form.Label>
          <Form.Control placeholder="Enter YYYY-MM-DD" onChange={onDateChange}></Form.Control>
          <Form.Label>
            Image URL
              </Form.Label>
          <Form.Control placeholder="Enter Image URL (direct path to file)" onChange={onImageURLChange}>
          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-right">
        <Button onClick={onAddContentSubmit} disabled={!content.date}>
          Submit
          </Button>
      </Modal.Footer>
    </Modal>
  );

  const [showDelete, setShowDelete] = useState(false);

  const [allContent, setAllContent] = useState([]);

  useEffect(() => {
    fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllContent(data);
      })
      .catch(console.log);
  }, []);

  const [selectionDelete, setSelectionDelete] = useState("News");

  function makeOptions() {

    var data = [];

    if(selectionDelete === "News") data = allContent.filter(x => x.mediatype === "teaching" || x.mediatype === "event" || x.mediatype === "latest");
    if(selectionDelete === "General Info") data = allContent.filter(x => x.mediatype === "generalinf");
    if(selectionDelete === "Why CS?") data = allContent.filter(x => x.mediatype === "whycs");
    if(selectionDelete === "Undergraduate") data = allContent.filter(x => x.mediatype === "undergrad");
    if(selectionDelete === "Graduate") data = allContent.filter(x => x.mediatype === "grad");
    if(selectionDelete === "CEGEP") data = allContent.filter(x => x.mediatype === "cegep");
    if(selectionDelete === "Freshman") data = allContent.filter(x => x.mediatype === "freshman");

    const jsx = [];

    for(var i = 0; i < data.length; i++) {
        jsx.push(<option>{data[i].title}</option>);
    }

    return jsx;


  }


  

  const [contentToDelete, setContentToDelete] = useState("");

  const onContentDeleteSubmit = async () => {
    const rawResponse = await fetch(
      "http://fall2020-comp307.cs.mcgill.ca:8020/api/media/del/" +
        contentToDelete,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: cookies['username'], password: cookies['password']})
      }
    );
    console.log(rawResponse);
    setShowDelete(false);
  };


  const deleteContentModal = (

    <Modal show={showDelete} onHide={() => setShowDelete(false)}>
      <Modal.Header>
        <Modal.Title>Delete Content</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Form>
          <Form.Label>Select a Tab</Form.Label>
          <Form.Control as="select" onChange={(e) => { setSelectionDelete(e.target.value) }}>
            <option>News</option>
            <option>General Info</option>
            <option>Why CS?</option>
            <option>Undergraduate</option>
            <option>Graduate</option>
            <option>CEGEP</option>
            <option>Freshman</option>
          </Form.Control>

          <Form.Label>Select Content</Form.Label>
          <Form.Control as="select" multiple onChange = {(e) => {setContentToDelete(allContent.find(x => x.title === e.target.value).id)}}>
              {makeOptions()}
          </Form.Control>


        </Form>

      </Modal.Body>

      <Modal.Footer>
        <div className = "text-right">
          <Button variant="danger" disabled={contentToDelete === ""} onClick={onContentDeleteSubmit}>Submit</Button>
        </div>
      </Modal.Footer>

    </Modal>

  )


  if (cookies["username"]) {
    return (
      <div>
        {addContentModal}
        {deleteContentModal}
        <div className="text-center">
          <div>You are logged in</div>
          <br />
          <Button onClick={() => setShowAddContent(true)}>Add Content</Button>
          <br/>
          <br/>
          <Button onClick={() => setShowDelete(true)}>Delete Content</Button>
        </div>
      </div>
    );
  }
  return loginPage;
}

export default Login;
