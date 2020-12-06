import { Container, Row, Col } from "react-bootstrap";

import {useState, useEffect } from "react";


function Graduate() {

    const titleStyle = {
        color: "#232d52",
        fontSize: "3vw",
        borderBottom: "5px solid #232d52"

    }

    const textContainer = {
        paddingTop: "1vw"
    }

    const subtitleStyle = {
        paddingBottom: "0.5vw",
        color: "black",
        fontSize: "18pt",
    }

    const textStyle = {
        textAlign: "justify",
        textJustify: "inter-word",
        fontsize: "1vw",
        color: "black"
    }

    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media/graduate")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfo(data);
            })
            .catch(console.log);

    }, []);


    function makeText(textElement) {
        return (
            <Container style={textContainer}>
                <Row style={subtitleStyle}>{textElement.title}</Row>
                <Row style={textStyle}>
                    {textElement.description}
                </Row>
            </Container>
        );
    }

    function makeAllTexts(allElements) {
        const jsx = [];
        for(var i = 0; i < allElements.length; i++) {
            jsx.push(makeText(allElements[i]));
        }

        return jsx;
    }

    return (

        <div>
            <Container>
                <Row style={titleStyle}>Graduate</Row>
            </Container>

            {makeAllTexts(info)}

        </div>


    );


}

export default Graduate;