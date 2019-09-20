import React from 'react';

//  export default function CharacterCard({ image, name, species, location }) {
//   return (
//     <div className='character-card'>
//       <h2>{name}</h2>
//       <img alt='rick and morty character' src={image} />
//       <h3>Species: {species}</h3>
//       <h3>Location: {location}</h3>
//     </div>
//   )
// }


const CharacterCard = props => {
  // console.log(props.name)
  return (
  <div className='character-card'>
    <h2>{props.name}</h2>
    <img alt='rick and morty character' src={props.image} />
    <h3>Species: {props.species}</h3>
  </div>
  )
}
export default CharacterCard;


