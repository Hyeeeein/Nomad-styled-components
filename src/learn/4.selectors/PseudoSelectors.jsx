import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// pseudo selectors
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  border-radius: 50%;

  span {
    font-size: 30px;
    &:hover {
      font-size: 40px;
    }
  }
`;

// pseudo selectors part 2
const Emoji = styled.span`
  font-size: 30px;
`;

const BoxTwo = styled.div`
  height: 200px;
  width: 200px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;

  ${Emoji} {
    border: 3px solid #000;
    border-radius: 10px;
    &:hover {
      font-size: 50px;
    }
  }
`;

const PseudoSelectors = () => {
  return (
    <>
      <h1>Pseudo Selectors</h1>
      <Wrapper>
        <Box>
          <span>🙏🏻</span>
        </Box>
        <BoxTwo>
          <Emoji>✨</Emoji>
        </BoxTwo>
        <Emoji>😎</Emoji>
      </Wrapper>
    </>
  );
};

export default PseudoSelectors;
