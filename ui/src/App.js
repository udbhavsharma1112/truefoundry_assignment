import './App.css';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="container">
      <Routes>
      <Route key={1} path="/" element={<Form />} />
      <Route key={2} path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
