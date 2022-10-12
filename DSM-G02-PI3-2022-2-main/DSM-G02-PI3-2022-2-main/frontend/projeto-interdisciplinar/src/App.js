import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//IMPORT DAS PAGINAS DA APLICAÇÃO
import Home from './pages/Home/Home'
import Questoes from './pages/Questoes/Questoes'
import Sobre from './pages/Sobre/Sobre'

function App() {
  return (
   //ROTAS DA APLICAÇÃO
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questoes" element={<Questoes />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
   </Router>
  );
}

export default App;