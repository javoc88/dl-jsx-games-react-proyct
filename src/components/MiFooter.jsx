import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

function MiFooter() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <h3>DOTA 2</h3>
            <p>
              From magical tacticians to fierce brutes and cunning rogues, Dota
              2's hero pool is massive and limitlessly diverse. Unleash
              incredible abilities and devastating ultimates on your way to
              victory.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <h3>Join now</h3>
            <div>
            <Button href="https://store.steampowered.com/app/570/Dota_2/" variant="outline-danger">PLAY FOR FREE</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MiFooter;
