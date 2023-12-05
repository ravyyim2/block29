import React from "react";
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  console.log(players);
  const navigate = useNavigate();

  async function getPlayers() {
    try {
      const allPlayers = await fetchPlayers();
      setPlayers(allPlayers);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div id="players-container">
      {players.map((player, index) => {
        return (
          //make sure to add a return in the map function
          <div className="player-card" key={index}>
            <h1>{player.name}</h1>
            <img src={player.imageUrl} alt={`Picture of ${player.name}`} />
            <button
              className="button"
              onClick={() => {
                navigate(`/players/${player.id}`);
              }}
            >
              <i class="fa-solid fa-bone fa-spin fa-2xs"></i> See Details!
            </button>
            <button
              className="button"
              onClick={async () => {
                await removePlayer(player.id);
                await getPlayers();
              }}
            >
              Remove From Roster...
              <i class="fa-solid fa-delete-left fa-2xs"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
