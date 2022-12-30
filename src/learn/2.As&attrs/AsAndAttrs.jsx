import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: steelblue;
`;

const AsAndAttrs = () => {
  return (
    <>
      <h1>AsAndAttrs</h1>
      <h3>As</h3>
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      <h3>Attrs</h3>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
};

export default AsAndAttrs;
