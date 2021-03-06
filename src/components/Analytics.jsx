import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

export default function Analytics() {
  return (
  <Section>
    <div className="analytic">
      <div className="content">
        <h5>Gastos desse Mês</h5>
        <h2>R$302.36</h2>
      </div>
      <div className="logo">
        <BsFillCalendar2WeekFill />
      </div>
    </div>
    <div className="analytic">
      <div className="logo">
        <IoStatsChart />
      </div>
      <div className="content">
        <h5>Ganhos</h5>
        <h2>R$47.36</h2>
      </div>
    </div>
    <div className="analytic">
      <div className="logo">
        <BiGroup />
      </div>
      <div className="content">
        <h5>Novos Clientes</h5>
        <h2>38</h2>
      </div>
    </div>
    <div className="analytic">
      <div className="content">
        <h5>Atividades</h5>
        <h2>R$340.50</h2>
      </div>
      <div className="logo">
        <FiActivity />
      </div>
    </div>
  </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #04BFAD;
      color: #FFFFFF;
      svg {
        color: #FFFFFF;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
        color: #FFFFFF;
      }
    }
  }
  @media screen and (min-width:320px) and (max-width:1080px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &::nth-of-type(3),
      &::nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;