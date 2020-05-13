import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Form from './components/Form';
import Weather from './components/Weather';
import "./index.css";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.25em 1em;
  background: rgba(107, 104, 101, 0.5);
  box-shadow: 12px 12px 2px 1px rgba(255, 255, 255, .6);
  
  @media (min-width : 800px){
    height: 70%;
    width: 70%;
    border-radius: 30px;
  }
  `;



class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Form/>
          <Weather/>
          <FontAwesomeIcon icon={faBolt} color="blue" />
        </Wrapper>
      </div>
    );
  }
}
export default App;
