import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Products from './components/product';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/product'>Products</Link>
            </li>
          </ul>
        </header>
      <main>
        <Routes>
          <Route path='/' />
          <Route path='/product' element={<Products />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
