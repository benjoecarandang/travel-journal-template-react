import "./style.css"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <div class="journal">
        <Navbar title="my travel journal" />
        <Main />
      </div>
    </div>
  );
}

export default App;
