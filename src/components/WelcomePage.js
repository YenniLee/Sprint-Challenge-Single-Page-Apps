import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWelcome= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center; 
  justify-content: center;
  margin: 20px;
  font-size: 2rem;
  color: #32CD32;
`;
export default function WelcomePage() {
  return (
    <StyledWelcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <NavLink to ={'/characters'}>List of Characters</NavLink>
    </StyledWelcome>
  );
}
