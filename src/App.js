import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Signup from "./components/signup"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Footer />
        <Signup />
      </header>
    </div>
  );

}

export default App;
