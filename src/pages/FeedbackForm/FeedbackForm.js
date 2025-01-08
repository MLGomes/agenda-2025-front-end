import React from "react";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body text-center">
          <h1 className="card-title text-success mb-4">Solicitação Enviada!</h1>
          <p>
            O doutor vai verificar sua solicitação de agendamento e você
            receberá um retorno via WhatsApp em breve.
          </p>
          <Link to="/" className="btn btn-primary mt-4">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
