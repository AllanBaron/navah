import React from "react";
import { Container, Button } from "shards-react";
import { Link } from "react-router-dom";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Página não encontrada!</h3>
        <p>Desculpe, esta página não existe mais.</p>
        <Link to="/">
          <Button pill>&larr; Voltar</Button>
        </Link>
      </div>
    </div>
  </Container>
);

export default Errors;
