import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
    </>
  );
}

export default App;
