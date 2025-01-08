import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Consulta agendada com sucesso!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Agendar Consulta</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="whatsapp" className="form-label">
                WhatsApp:
              </label>
              <input
                type="tel"
                className="form-control"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Data:
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Horário:
              </label>
              <input
                type="time"
                className="form-control"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Observações:
              </label>
              <textarea
                className="form-control"
                id="notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Agendar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
