import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./index.css";

export default function App() {
  return (
  <Div>
    <Sidebar />
    <Dashboard />
  </Div>
  )
}

const Div = styled.div``;