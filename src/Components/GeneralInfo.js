import { Container, Row, Col } from "react-bootstrap";


function GeneralInfo() {

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
        color: "black"
    }

    const mockData = {
        subtitle: "McGill School of Computer Science",
        text: "McGill University is one of the top research universities in Canada and is the only Canadian university to rank consistently among the top 25 universities in the world (based on Times and QS rankings). The School of Computer Science currently stands second in Canada for its research funding. Our professors have received most of the top awards in Computer Science, while our students go on to become top-notch research and industry leaders. A graduate degree from the McGill School of Computer Science is recognized in both the academic and industrial worlds as a proof of excellence. Our department is currently 34 faculty members strong, 60 Ph.D. students, and 100 Masters students. All of our Ph.D. students and most of our Masters students are funded through teaching assistantships or research assistantships. Approximately half our graduate students are Canadian and the other half are from abroad."
    }
    return (

        <div>
            <Container>
                <Row style={titleStyle}>General Info</Row>
            </Container>

            <Container style={textContainer}>
                <Row style={subtitleStyle}>{mockData.subtitle}</Row>
                <Row style={textStyle}>
                    {mockData.text}
                </Row>
            </Container>
        </div>


    );


}

export default GeneralInfo;