import React from "react";
import { useState } from "react";
import { addPlayer } from "../API";
import { useNavigate } from "react-router-dom";
// import { removePlayer } from "../API";

export default function NewPlayerForm() {
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPlayer({ name, breed });
      navigate("/");
    } catch (err) {
      console.err;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Breed:{" "}
        <input
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
