import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAni} 1s linear infinite;
  margin-right: 50px;
`;

const Animation = () => {
  return (
    <>
      <h1>Animation</h1>
      <Wrapper>
        <Box></Box>
      </Wrapper>
    </>
  );
};

export default Animation;
