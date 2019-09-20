import React from 'react';

 export default function CharacterCard({ image, species, location }) {
  return (
    <div className='character-card'>
      {/* <h2>{name}</h2> */}
      <img alt='rick and morty character' src={image} />
      <h3>Species: {species}</h3>
      <h3>Location: {location}</h3>
    </div>
  )
}


