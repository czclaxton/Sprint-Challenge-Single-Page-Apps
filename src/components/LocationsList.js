import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList(props) {
  const [data, setData] = useState([]);
  console.log("Location Data: ", data);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then(response => {
      setData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2 className="grid-view">
        {data.map(location => {
          return (
            <LocationCard
              key={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
            />
          );
        })}
      </h2>
    </section>
  );
}
