import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Entrada from './pages/Entrada';
import Saida from './pages/Saida';
import Transferencias from './pages/Transferencias';
import Relatorios from './pages/Relatorios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/transferencias" element={<Transferencias />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
