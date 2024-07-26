import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar" // Import the Navbar component
import Footer from "./components/footer" // Import the Footer component
import Signup from "./components/signup" // Import the SignUp component
import Login from './components/login'; // Import the Login component

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
