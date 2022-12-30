import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 100px;
`;

const Extending = () => {
  return (
    <>
      <h1>Extending</h1>
      <Father>
        <Box bgColor="teal"></Box>
        <Circle bgColor="tomato"></Circle>
      </Father>
    </>
  );
};

export default Extending;
