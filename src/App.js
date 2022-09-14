import Header from './Components/Header';
import Team from './Pages/Team';
import Join from './Pages/Join';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Clients from './Pages/Clients';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/join" element={<Join />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/clients" element={<Clients />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;
