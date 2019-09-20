import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log(response.data.results)
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  // console.log(characters)
    
  return (
    <section className="character-list">
      {characters.map(character => {
        console.log(character)
        return (
          // <CharacterCard 
          //   key={character.id}
          //   image={character.image}
          //   name={character.name}
          //   species={character.species}
          //   location={character.location}
          // />
          <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} />

        )
      })}
    </section>
  );
}
