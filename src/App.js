import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islandsData from "./data/islands";
import { useState } from "react";

function App() {
  const [island, setIsland] = useState({
    id: 2,
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  const [islands, setIslands] = useState(islandsData);

  const incrementVisitors = (islandID) => {
    const visitedIsland = islands.find((island) => island.id === islandID);
    visitedIsland.visitors++;
    setIslands([...islands]);
  };

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islands={islands} />
        <IslandForm island={island} incrementVisitors={incrementVisitors} />
      </div>
    </div>
  );
}

export default App;
