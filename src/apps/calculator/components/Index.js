import React from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";
import styled from "styled-components";

const Index = () => {
  return (
    <StyledWrapper>
      <StyledFrame>
        <Display />
        <Keyboard />
      </StyledFrame>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  box-sizing: border-box;
  background-color: hsl(120, 100%, 95%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFrame = styled.div`
  border: 1px solid brown;
  background-color: blueviolet;
  border-radius: 25px;
  height: 80%;
  min-width: 20em;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
export default Index;
