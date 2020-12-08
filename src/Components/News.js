import { useState, useEffect } from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";

function News() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("http://fall2020-comp307.cs.mcgill.ca:8020/api/media/allNews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllNews(data);
      })
      .catch(console.log);
  }, []);

  const displayNews = () => {
    const jsx = [];

    for (var i = 0; i < allNews.length; i++) {
      var news = allNews[i];
      if (news.imgurl && news.imgurl.includes("http")){
        jsx.push(
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={i.toString()}
                >
                  {news.title + " - " + news.date.split("T")[0]}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i.toString()}>
                <Card.Body>
                <Image src={news.imgurl} fluid />
                    {news.description}
                    </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
      } else {
        jsx.push(
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={i.toString()}
                >
                  {news.title + " - " + news.date.split("T")[0]}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i.toString()}>
                <Card.Body>{news.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
      }
    }
    return jsx;
  };

  return (
    <div
      style={{ width: "90%", margin: "auto", padding: "10px 10px 10px 10px" }}
    >
      <Accordion defaultActiveKey="0">{displayNews()}</Accordion>
    </div>
  );
}

export default News;
