import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  console.log("Character Data: ", data);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      setData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2 className="grid-view">
        {data.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
              location={character.location}
            />
          );
        })}
      </h2>
    </section>
  );
}
