import { useState, useEffect } from "react";
import { Dropdown, Card, CardDeck, DropdownButton, Modal, Button, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";

function ResearchArea() {

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

    const [cookies, setCookie, removeCookie] = useCookies([
        "username",
        "password",
    ]);

    const [research, setResearch] = useState([]);

    useEffect(() => {
        fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media/research")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResearch(data);
            })
            .catch(console.log);
    }, []);

    const mockData = research.map(r => { return { title: r.title, subjects: JSON.parse(r.j), imgurl: r.imgurl, id: r.id } });

    console.log(mockData);

    function createDropdowns(subareas) {

        const jsx = [];

        if (!subareas) return jsx;

        for (var i = 0; i < subareas.length; i++) {
            jsx.push(<Dropdown.ItemText>{subareas[i]}</Dropdown.ItemText>);
        }

        return jsx;
    }

    function cardifyArea(area) {
        return (
            <Card style={cardStyle}>
                <Card.Img variant="top" src={area.imgurl} />
                <Card.Body>
                    <Card.Title>{area.title}</Card.Title>
                    <DropdownButton>
                        {createDropdowns(area.subjects)}
                    </DropdownButton>
                </Card.Body>
            </Card>
        );
    }

    function makeDecks(allAreas, jsx) {
        const jsx2 = [];
        for (var i = 0; i < allAreas.length; i++) {
            jsx2.push(cardifyArea(allAreas[i]));
        }
        jsx.push(<CardDeck style={cardDeckStyle}>{jsx2}</CardDeck>);

        return jsx;
    }

    var returnPage = [];

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const editButtons = () => {
        if (cookies['username']) {
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

    const [inputAddData, setInputAddData] = useState({});



    const onResearchAreaChange = (e) => {
        setInputAddData({ ...inputAddData, title: e.target.value });

    }

    const onTopicsChange = (e) => {
        setInputAddData({ ...inputAddData, j: JSON.stringify(e.target.value.split(", ")) });
    }

    const onImgurlChange = (e) => {
        setInputAddData({ ...inputAddData, imgurl: e.target.value });

    }

    const onAddSubmit = async () => {
        const rawResponse = await fetch(
            "http://fall2020-comp307.cs.mcgill.ca:8020/api/media/research",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...inputAddData, username: cookies['username'], password: cookies['password']}),
            }
        );

        console.log(rawResponse);

        setShowAddModal(false);
    };

    const addModal = (
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>

            <Modal.Header>
                <Modal.Title>Add Research Area</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form>
                    <Form.Label>Specify the Research Area</Form.Label>
                    <Form.Control onChange={onResearchAreaChange}></Form.Control>

                    <Form.Label>Topics</Form.Label>
                    <Form.Control placeholder="Topic1, Topic2, Topic3" onChange={onTopicsChange}></Form.Control>

                    <Form.Label>Image URL</Form.Label>
                    <Form.Control placeholder="Enter Image URL (direct path to file)" onChange={onImgurlChange}></Form.Control>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={onAddSubmit}>Submit</Button>
            </Modal.Footer>



        </Modal>

    );

    function researchAreaTitles() {
        const jsx = [];

        for (var i = 0; i < mockData.length; i++) {
            jsx.push(<option>{mockData[i].title}</option>)
        }

        return jsx;
    }

    const [areaToDelete, setAreaToDelete] = useState("");

    const onDeleteSubmit = async () => {
        const rawResponse = await fetch(
          "http://fall2020-comp307.cs.mcgill.ca:8020/api/media/research/" +
            areaToDelete,
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
        setShowDeleteModal(false);
      };

    


    const deleteModal = (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <br />
            <Modal.Header>
                <Modal.Title>Add Research Area</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Label>Research Areas</Form.Label>
                    <Form.Control as="select" onChange={(e) => { setAreaToDelete(mockData.find(x => x.title === e.target.value).id) }}>
                        {researchAreaTitles()}
                    </Form.Control>
                </Form>
            </Modal.Body>

            <Modal.Footer className="text-right">
                <Button variant="danger" disabled={areaToDelete === ""} onClick={onDeleteSubmit}>
                    Delete
            </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <div>
            <div>
                {editButtons()}
            </div>

            {addModal}
            {deleteModal}
            {makeDecks(mockData, returnPage)}


        </div>

    );


}

export default ResearchArea;