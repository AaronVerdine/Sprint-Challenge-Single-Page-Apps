import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList(props) {
  const [locations, setLocations] = useState([]);

  useEffect(id => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        setLocations(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="character-list-grid-view">
      {locations.map(location => (
        <LocationCard
          name={location.name}
          dimension={location.dimension}
          type={location.type}
          residents={location.residents}
        />
      ))}
    </div>
  );
}
