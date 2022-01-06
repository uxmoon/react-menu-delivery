import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Menu delivery</h1>
      <nav>
        <ul>
          <Link to="/menu">Menu</Link>
          <Link to="/stores">Stores</Link>
        </ul>
      </nav>
    </div>
  );
}

export default App;
