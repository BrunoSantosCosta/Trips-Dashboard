import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi"

export default function Navbar() {
  return ( 
    <Nav>
      <div className="title">
        <h4>Olá, Bruno</h4>
        <h1>
          Bem vindo ao<span>Trips</span> dashboard
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Pesquisar"/>
      </div>
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #FFFFFF;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;;
        color:  #04BFAD;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #04BFAD;
    }
    input {
      background-color: transparent;
      border: none;
      color: #04BFAD;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #000000;
        font-weight: 600;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;