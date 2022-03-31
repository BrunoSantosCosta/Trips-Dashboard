import React from "react";
import Styled from "styled-components";
import Analytics from './Analytics';
import FAQ from './FAQ';
import NavBar from './Navbar';
import Profile from './Profile';
import Transfers from './Transfers';
import Earnings from './Earnings';

export default function Dashboard() {
  return (
    <Section>
      <NavBar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
}

const Section = Styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;