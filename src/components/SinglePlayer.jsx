import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import { useState, useEffect } from "react";

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null);

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const nextPlayer = await fetchSinglePlayer(params.playerId);
        // console.log(nextPlayer);
        setPlayer(nextPlayer);
      } catch (err) {
        console.error(err);
      }
    }
    getSinglePlayer();
  }, []);

  return (
    player && (
      <div className="player-container">
        <div id="single-player">
          <h3>{player.name}</h3>
          <p>ID # {player.id}</p>
          <p>{player.breed}</p>
          <p>{player.status}</p>
          <img src={player.imageUrl} alt={`Picture of ${player.name}`} />
          <button
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            <i class="fa-solid fa-recycle fa-spin fa-2xs"></i> Back to all
            players! <i class="fa-solid fa-recycle fa-spin fa-2xs"></i>
          </button>
        </div>
      </div>
    )
  );
}
