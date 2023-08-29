import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MiNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src/assets/img/dota2-logo.png"
              width="140"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MiNavbar;