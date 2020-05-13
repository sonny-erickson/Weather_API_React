import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./index.css";

const Wrapper = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.25em 1em;
  background-color: rgba(234, 21, 24, 0.7);
`;

const ContainerComponents = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: rgba(3, 169, 24, 0.7);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <ContainerComponents>
          
            <FontAwesomeIcon icon={faBolt} color="blue" />
          </ContainerComponents>
        </Wrapper>
      </div>
    );
  }
}
export default App;
