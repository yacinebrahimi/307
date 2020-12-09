import { Container, Row, Col } from "react-bootstrap";

function Contact() {

    const titleStyle = {
        fontSize: "18pt"
    };

    const containerStyle = {
        paddingTop: "10px"
    }

    return (
        <div >
            <Container style={containerStyle}>
                <Row style={titleStyle}>Administrative Offices</Row>
                <Row>
                    McConnell Engineering Bldg. Room 318 <br></br>
                    3480 University St., <br></br>
                    Montréal, Québec, Canada <br></br>
                    H3A 0E9 <br></br>
                    Tel: (514) 398-7071 <br></br>
                    Fax: (514) 398-3883
                </Row>

            </Container>

            <Container style={containerStyle}>
                <Row style={titleStyle}>Undergraduate Studies</Row>
                <Row>
                    <Col>
                        <div>
                            <strong>Application Info</strong>
                            <br></br>
                            <a href="http://www.mcgill.ca/prospective">www.mcgill.ca/prospective</a>
                            <br></br>
                            <a href="https://mcgill.ca/students/servicepoint/contact-us">Service Point</a>
                            <br></br>
                            Tel: (514) 398-3910
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <strong>Program Info</strong>
                            <br></br>
                            Liette Chin
                            <br></br>
                            <a href="mailto:ugrad-coordinator@cs.mcgill.ca">ugrad-coordinator@cs.mcgill.ca</a>
                            <br></br>
                            Tel: (514) 398-7071 ext. 00118
                        </div>

                    </Col>
                       

                    <Col>
                        <div>
                            <strong>Undergraduate Secretary</strong>
                            <br></br>
                            Adina Puica
                            <br></br>
                            <a href="mailto:undergraduate.secretary@cs.mcgill.ca">undergraduate.secretary@cs.mcgill.ca</a>
                            <br></br>
                            Tel: (514) 398-7071 ext. 00739
                        </div>
                    </Col>
                   
                </Row>

            </Container>

            <Container style={containerStyle}>
                <Row style={titleStyle}>Graduate Studies</Row>
                <Row>
                    <Col>
                        <div>
                            <strong>Application Info</strong>
                            <br></br>
                            <a href="http://www.mcgill.ca/prospective">www.mcgill.ca/prospective</a>
                            <br></br>
                            <a href="https://mcgill.ca/students/servicepoint/contact-us">Service Point</a>
                            <br></br>
                            Tel: (514) 398-3990
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <strong>Graduate Secretary</strong>
                            <br></br>
                            Ann Jack
                            <br></br>
                            <a href="mailto:ann.jack@mcgill.ca">ann.jack@mcgill.ca</a>
                            <br></br>
                            Tel: (514) 398-7071 ext. 00074
                        </div>

                    </Col>
                   
                </Row>

            </Container>

            <Container style={containerStyle}>
                <Row style={titleStyle}>Computer & Network Operations</Row>
                <Row>
                    <div>
                        <strong>Help Desk</strong> <br></br>
                        McConnell Engineering Bldg. Room 209N<br></br>
                        3480 University, Montreal, Qc, Canada, H3A 0E9<br></br>
                        <a href="mailto:help@cs.mcgill.ca">help@cs.mcgill.ca</a>
                        <br></br>
                        Tel: (514) 398-7087
                    </div>
                </Row>

            </Container>


        </div>
    );


}

export default Contact;