import Nav from './Components/Navbar/Nav';
import Landing from './Pages/Landing/Landing.jsx';
import Projects from './Pages/Projects';
import Clients from './Pages/Clients';
import Footer from './Components/Footer/Footer';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Join from './Pages/Join/Join';
import TheTeam from './Pages/Team/Team';
import ForClients from './Pages/Clients/Clients';


function App() {

  return (
    <div>
      <Router>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Landing />} /> 
          <Route exact path="/team" element={<TheTeam />} />
            <Route exact path='/join' element={<Join />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/clients" element={<ForClients />} />
          </Routes>
        <Footer />
      </Router>      
    </div>

  );
}

export default App;
