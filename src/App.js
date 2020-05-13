import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.25em 1em;
  background: rgba(3, 169, 24, 0.5) ;
  @media (min-width : 800px){
    background: rgba(3, 100, 50, 0.7) ;
    height: 70%;
  width: 70%;
  }
  `;



class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          
            <FontAwesomeIcon icon={faBolt} color="blue" />
        </Wrapper>
      </div>
    );
  }
}
export default App;
