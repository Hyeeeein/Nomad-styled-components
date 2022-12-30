import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TextContent = styled.p`
  width: 300px;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 20px;
  margin-right: 10px;
`;

const Figure = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: ${(props) => props.theme.textColor};
`;

const Square = styled(Figure)`
  border-radius: 10px;
`;

const Circle = styled(Figure)`
  border-radius: 50%;
`;

const Themes = () => {
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. A delectus reiciendis iste quibusdam, nesciunt minus, molestiae libero cumque cum error, blanditiis sunt quos perferendis quam id magni. Aut, magnam molestiae.`;
  return (
    <Body>
      <Title>Themes</Title>
      <Wrapper>
        <TextContent>{text}</TextContent>
        <TextContent>{text}</TextContent>
        <TextContent>{text}</TextContent>
        <TextContent>{text}</TextContent>
      </Wrapper>
      <Wrapper>
        <Square />
        <Square />
        <Circle />
        <Circle />
      </Wrapper>
    </Body>
  );
};

export default Themes;
