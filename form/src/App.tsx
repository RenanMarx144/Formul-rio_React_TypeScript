import React from 'react';
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { Resultados } from "./pages/Result";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
        <Route index  element={<Home />}/>
        <Route path="/formulario" element={<Form />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes> 
      </Router>
  );
}

export default App;
