import './App.css';
import Welcome from "./components/Welcome";
import PlayerList from "./components/PlayerList";
import { playerData } from "./data/playerData"

function App() {
  return (
    <div className="App">
      <Welcome />
      <PlayerList players={playerData}
    </div>
  );
}

export default App;
