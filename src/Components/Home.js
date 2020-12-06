import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";


function Home() {

    const carouselStyle = {
        width: "auto",
        margin: "auto",
        backgroundColor: "#7f7f7f",
        width: "100%",
        height: "100%",
        textAlign: "center"
    }

    const captionStyle = {
        color: "white",
        backgroundColor: "#232d52"
    }

    const containerDivStyle = {
        padding: "1vw 1vw 1vw 1vw",
    }

    const containerStyle = {
        color: "#232d52",
        height: "auto",
        width: "60%"
    }

    const rowStyle = {
        borderStyle: "solid",
        borderColor: "#232d52",
        padding: "1vw 1vw 1vw 1vw"
    }

    const [media, setMedia] = useState([]);

    useEffect(() => {
        fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media/home")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMedia(data);
            })
            .catch(console.log);

    }, []);

    const events = media.filter(x => x.mediatype === 'event');
    const teaching = media.filter(x => x.mediatype === 'teaching');
    const latest = media.filter(x => x.mediatype === 'latest');

    function sortByDate(array) {

        array.sort(function (a, b) {
            var arrA = a.split('-');
            var arrB = b.split('-');

            return new Date(new Date(arrB[0], arrB[1], arrB[2])) - new Date(new Date(arrA[0], arrA[1], arrA[2]));
        });
    }

    events = sortByDate(events);
    teaching = sortByDate(teaching);
    latest = sortByDate(latest);

    function carouselItem(latestElement) {
        return (

            <Carousel.Item interval={2000}>
                <img
                    width="50%"
                    height="100%"
                    src={latestElement.imgurl}
                />

                <Carousel.Caption style={captionStyle}>
                    <h3>{latestElement.title}</h3>
                </Carousel.Caption>

            </Carousel.Item>
        );
    }

    function makeCarousel(teaching) {
        const jsx = [];

        for (var i = 0; i < teaching.length; i++) {
            jsx.push(carouselItem(teaching[i]));
        }

        return jsx;
    }

    function rowItem(element) {
        return (
            <Row style={rowStyle}>
                <Col sm={10}>{element.title}</Col>
                <Col sm={2}>{element.date}</Col>
            </Row>
        );
    }

    function makeRows(elements) {
        const jsx = [];

        for (var i = 0; i < elements.length; i++) {
            jsx.push(rowItem(elements[i]));
        }

        return jsx;
    }

    return (
        <div>
            <Carousel style={carouselStyle}>
                {makeCarousel(teaching)}
            </Carousel>


            <div >

                <div style={containerDivStyle}>
                    <Container style={containerStyle}>
                        <Row style={rowStyle}>
                            <Col>LATEST @ CS</Col>
                        </Row>
                        {makeRows(latest)}
                    </Container>
                </div>

                <div style={containerDivStyle}>
                    <Container style={containerStyle}>
                        <Row style={rowStyle}>
                            <Col>EVENTS @ CS</Col>
                        </Row>
                        {makeRows(events)}
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Home;