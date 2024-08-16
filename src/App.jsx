import React, { useState } from "react";
import Card from "./Card"; 

function App() {

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.length < 3 || input1.startsWith(" ") || input2.length < 6) {
      setError(true);
      setShowCard(false);
    } else {
      setError(false);
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Color favorito"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del color"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar mensaje de error si las validaciones fallan */}
      {error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta</p>}

      {/* Renderizar el componente Card si las validaciones son exitosas */}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
