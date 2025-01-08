import "./Form.css";

const Form = ({ onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" placeholder="Digite aqui..." required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
