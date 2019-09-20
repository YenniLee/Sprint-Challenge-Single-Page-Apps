import React from 'react';
import styled from 'styled-components';

const CardContainer=styled.div`
  display: flex;
  width: 30vw;
`;
const Card = styled.div`
  border: 3px dashed #32CD32;
  width: 30vw;
  margin: 20px 0;
  padding: 10px;
  color: #8B0000;
`;


const CharacterCard = props => {
  return (
    <CardContainer>
      <Card key={props.id}>
      <img
        width='100%'
        src={props.image}
        alt='rick and morty character'
      />
      <h2>{props.name}</h2>
      <h3>Species: {props.species}</h3>
      <h3>Location: {props.location}</h3>
    </Card>
    </CardContainer>
    

  )
}
export default CharacterCard;


