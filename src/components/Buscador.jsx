import Container from "react-bootstrap/Container";

function Buscador({ search, setSearch }) {
  return (
    <>
      <Container className="searchContainer">
        <input
          type="text"
          placeholder="Search hero by name"
          className="form-control"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Container>
    </>
  );
}

export default Buscador;
