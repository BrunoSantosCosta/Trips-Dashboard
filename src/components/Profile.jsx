import React from "react";
import styled from "styled-components";
import image from "../assets/avatar5.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

export default function Profile() {
  return(
     <Section>
    <div className="image">
      <img src={image} alt="" />
    </div>
    <div className="title">
      <h2>Bruno Santos</h2>
      <h5>
        <HiOutlineLocationMarker /> São José, SC
      </h5>
    </div>
    <div className="info">
      <div className="container">
        <h5>Dias trabalhados</h5>
        <h3>28</h3>
      </div>
      <div className="container">
        <h5>Corridas</h5>
        <h3>92</h3>
      </div>
      <div className="container">
        <h5>Horas</h5>
        <h3>32</h3>
      </div>
    </div>
  </Section>);
}

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #04BFAD;
      font-family: "Permanent Marker", cursive;
      font-size: 1.5rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;