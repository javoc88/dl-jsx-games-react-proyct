import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

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
          {heroes.filter(filterHeroes).map((h, index) => (
            <Card key={index} style={{ marginBottom: "20px" }}>
              <Card.Img variant="top" src={`https://cdn.dota2.com${h.img}`} alt={h.localized_name} />
              <Card.Body>
                <Card.Title>{h.localized_name}</Card.Title>
                <Card.Text>
                  {/* renderizar como botones */}
                  {h.primary_attr}
                  {h.attack_type}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiApi;
