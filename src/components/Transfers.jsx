import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import { cardStyle } from "./ReusableStyles";

export default function Transfers() {
  const transactions = [
    {
      image: avatar1,
      name: "De: Duan Rafael",
      time: "Hoje, 16:36",
      amount: "+R$50",
    },
    {
      image: avatar2,
      name: "Para: Brenda Langue",
      time: "Hoje, 08:49",
      amount: "-R$25",
    },
    {
      image: avatar3,
      name: "De: João Leite",
      time: "Ontem, 14:36",
      amount: "+R$150",
    },
  ];

  return <Section>
    <div className="title">
      <h2>Suas Transferencias</h2>
    </div>
    <div className="transactions">
      {
        transactions.map((transaction, index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount} </span>
              </div>
            </div>
          )
        })
      }
    </div>
    <a href="#" className="view">
      Veja Mais <HiArrowNarrowRight />
    </a>
  </Section>
}

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #04BFAD;
      font-family: "Permanent Marker", cursive;
      font-size: 1.5rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
        &__amount {
        background-color: #d7e41d1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        &:hover {
          background-color: #04BFAD;
          span {
            color: #FFFFFF;
          }
        }
        span {
          color: #04BFAD;
        }
      }
    }
  }  
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #04BFAD;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateY()(0.5rem);
      }
    }
  }
  @media screen and (min-width:320px) and (max-width:1080px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;