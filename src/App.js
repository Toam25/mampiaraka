import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Connexion from './Components/Connexion'
import Profil from './Components/Profil'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <Router>
         <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/profil/:id" element={<Profil />} />
              <Route exact path="/login" element={<Connexion />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
