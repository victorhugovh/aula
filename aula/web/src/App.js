import React from 'react';
import CompA from './componentes/CompA';
import CompB from './componentes/Props';
import CompC from './componentes/State';

function App() {
  return (
  <>
  <CompA/>
  <CompA/>
  <CompA/>
  <CompB nome = "Victor " sobrenome = "Ribeiro"/>
  <CompB nome = "Thays"/>
  <CompB nome = "Douglas"/>
  <CompC />
  </>
  );
}

export default App;
