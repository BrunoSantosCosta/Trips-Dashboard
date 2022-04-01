
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>TRIPS</span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span>Corridas</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a href="#">
                  <FaAddressCard />
                  <span>Detalhes de Pagamento</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span>Como Usar</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a href="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a href="#">
                  <IoSettings />
                  <span>Configurações</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Sair</span>
          </a>
        </div>
      </Section>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #FFF;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #04BFAD;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #000;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          transition: 0.2s;
          &:hover {
            background-color: #04BFAD;
            a {
              color: #FFF;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #000;
            align-items: center;
          }
        }
        .active {
          background-color: #04BFAD;
          a {
            color: #FFF;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #000;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: #FFF;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;
