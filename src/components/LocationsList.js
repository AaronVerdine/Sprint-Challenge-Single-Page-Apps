import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {
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

  return <div></div>;
}
