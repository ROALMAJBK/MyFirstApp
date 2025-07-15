import React, { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  const handleClick = () => {
    setMensaje('Hola Mundo NUEVO CAMBIO');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Haz clic</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;
