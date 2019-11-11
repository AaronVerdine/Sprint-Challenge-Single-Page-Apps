import React, { useState, useEffect } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="character-list-grid-view">
      {episodes.map(episode => (
        <EpisodeCard
          episode={episode.episode}
          name={episode.name}
          //   airdate={episode.airdate}
        />
      ))}
    </div>
  );
}
