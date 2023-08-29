import Container from "react-bootstrap/Container";

function Buscador({ search, setSearch }) {
  return (
    <>
      <Container>
        <h2>Search your Hero</h2>
        <input
          type="text"
          placeholder="Search by name"
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
