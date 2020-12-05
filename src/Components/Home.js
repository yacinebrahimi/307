import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";


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



    const mockData = [
        {
            title: "Remote Teaching in the Fall",
            image: "24_Remote_Teaching_in_the_Fall.png",

        },
        {
            title: "Remote Learning Tools",
            image: "29_Remote_Learning.png",
        },
        {
            title: "#ICodeLikeAGirl",
            image: "Icodelikeagirl.jpg"
        }

    ]



    return (
        <div>
            <Carousel style={carouselStyle}>
                <Carousel.Item interval={2000}>
                    <img
                        width="50%"
                        height="100%"
                        src={mockData[0]["image"]}
                        alt="First Slide"
                    />
                    <Carousel.Caption style={captionStyle}>
                        <h3>{mockData[0]["title"]}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        width="50%"
                        height="50%"
                        src={mockData[1]["image"]}
                        alt="Second Slide"
                    />
                    <Carousel.Caption style={captionStyle}>
                        <h3>{mockData[1]["title"]}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        width="50%"
                        height="50%"
                        src={mockData[2]["image"]}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={captionStyle}>
                        <h3>{mockData[2]["title"]}</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div >

                <div style={containerDivStyle}>
                    <Container style={containerStyle}>
                        <Row style={rowStyle}>
                            <Col>LATEST @ CS</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                    </Container>
                </div>

                <div style={containerDivStyle}>
                    <Container style={containerStyle}>
                        <Row style={rowStyle}>
                            <Col>EVENTS @ CS</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                        <Row style={rowStyle}>
                            <Col sm={10}>ZINBOOK</Col>
                            <Col sm={2}>Date posted</Col>
                        </Row>
                    </Container>
                </div>

            </div>








        </div>
    );
}

export default Home;