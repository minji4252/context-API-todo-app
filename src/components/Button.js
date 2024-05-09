import React from "react";
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  border: 0;
  color: #fff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ label, onClick }) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
