import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {
  const [data, setData] = useState([]);
  console.log("Episode Data: ", data);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then(response => {
      setData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2 className="grid-view">
        {data.map(episode => {
          return (
            <EpisodeCard
              key={episode.id}
              name={episode.name}
              date={episode.air_date}
              episode={episode.episode}
              characters={episode.characters}
            />
          );
        })}
      </h2>
    </section>
  );
}
