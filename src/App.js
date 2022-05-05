import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Connexion from './Components/Connexion'
import Inscription from './Components/Inscription'
import Profil from './Components/Profil'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
        <header className="App-header">
          <Navbar />
        </header>
         <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profil/:id" element={<Profil />} />
              <Route exact path="/login" element={<Connexion />} />
              <Route exact path="/register" element={<Inscription />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
