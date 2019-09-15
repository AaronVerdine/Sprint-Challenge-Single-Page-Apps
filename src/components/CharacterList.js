import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
console.log(props);

const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);

  return (
    <section className="character-list grid-view">
      <div>{characters.map(character => (
          <CharacterCard name={character.name} gender={character.gender}/>
        ))}
      </div>

    </section>
  );
}
