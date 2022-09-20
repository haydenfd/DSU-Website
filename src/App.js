import Header from './Components/Header';
import Team from './Pages/Team';
import Join from './Pages/Join';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Clients from './Pages/Clients';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
      {/* <Router>
        <Header />
          <Routes>
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/" element={<Landing />} /> 
            <Route exact path="/join" element={<Join />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/clients" element={<Clients />} />
          </Routes>
        <Footer />
      </Router>       */}
    </div>

  );
}

export default App;
