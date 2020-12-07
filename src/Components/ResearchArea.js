import { useState, useEffect } from "react";
import { Dropdown, Card, CardDeck, DropdownButton} from "react-bootstrap";


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

    const mockData = [{
        title: "Artifial Intelligence",
        subjects: ["Natural Language Processing", "Computational Social Science"],
        imgurl: "https://www.cs.mcgill.ca/media/research/area/5_Artificial_Intelligence.jpg"


    }, {
        title: "Bioinformatics",
        subjects: ["Computational Biology", "Neuroscience"],
        imgurl: "https://www.cs.mcgill.ca/media/research/area/6_Bioinformatics_and_Computational_Biology.jpg"
    },
    {
        title: "Computer Graphics",
        subjects: ["Computer Animation", "Perception"],
        imgurl: "https://www.cs.mcgill.ca/media/research/area/1_Computer_Graphics.jpg"
    }]

    function createDropdowns(subareas) {

        const jsx = [];

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

    return (
        <div>

            {makeDecks(mockData, returnPage)}

        </div>

    );


}

export default ResearchArea;