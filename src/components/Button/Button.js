import React from "react";
import "./Button.css"; // Estilos específicos do botão

function Button({ label, onClick, type = "button", className = "" }) {
  return (
    <button
      className={`custom-button ${className}`} // Permite adicionar estilos extras
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
