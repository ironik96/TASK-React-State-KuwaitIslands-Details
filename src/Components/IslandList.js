import { useState } from "react";
import islands from "../data/islands";
import Island from "./Island";

export default function IslandList({ setIsland }) {
  const [query, setQuery] = useState("");

  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => <Island island={island} setIsland={setIsland} />);
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
