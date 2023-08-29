import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";

const MiApi = () => {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");

  const filterHeroes = (h) => {
    return h.localized_name.toLowerCase().includes(search.toLowerCase());
  };

  const getData = async () => {
    const response = await fetch("https://api.opendota.com/api/heroStats");
    const data = await response.json();
    const orderedData = data.sort((a, b) =>
      a.localized_name.localeCompare(b.localized_name)
    );
    setHeroes(orderedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Buscador search={search} setSearch={setSearch} />
      <div className="container">
        <div className="card-container">
          <Row>
            {heroes.filter(filterHeroes).map((h, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <Card
                  border="light"
                  style={{ marginBottom: "20px" }}
                  className="text-center"
                >
                  <Card.Header as="h5">{h.localized_name}</Card.Header>
                  <Card.Img
                    variant="top"
                    src={`https://cdn.dota2.com${h.img}`}
                    alt={h.localized_name}
                  />
                  <Card.Body gap={2}>
                    <Stack
                      className="justify-content-center"
                      direction="horizontal"
                      gap={2}
                    >
                      <Button variant="primary" size="sm" disabled>
                        {h.primary_attr.charAt(0).toUpperCase() +
                          h.primary_attr.slice(1)}
                      </Button>
                      <Button variant="outline-danger" size="sm" disabled>
                        {h.attack_type.charAt(0).toUpperCase() +
                          h.attack_type.slice(1)}
                      </Button>
                    </Stack>
                    <div className="statsSection">
                      <p className="statsBase">Attributes</p>
                      <div className="container-stats">
                        <div className="card-stats">
                          <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                            alt="str"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                          />
                          <p className="statsStr">
                            {h.base_str} +{h.str_gain}
                          </p>
                        </div>
                        <div className="card-stats">
                          <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                            alt="agi"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                          />
                          <p className="statsAgi">
                            {h.base_agi} +{h.agi_gain}
                          </p>
                        </div>
                        <div className="card-stats">
                          <img
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                            alt="int"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                          />
                          <p className="statsInt">
                            {h.base_int} +{h.int_gain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default MiApi;
