import React from 'react';
import CompA from './Componentes/CompA';
import CompB from './Componentes/Props';
import CompC from './Componentes/State';
import Form from './Componentes/Formularios/Form';
import './Global.css';

function App() {
  return (
  <>
  <Form />
  <CompA />
  <CompA />
  <CompA />
  <CompB nome = "Victor " sobrenome = "Ribeiro"/>
  <CompB nome = "Thays"/>
  <CompB nome = "Douglas"/>
  <CompC />
  </>
  );
}

export default App;
