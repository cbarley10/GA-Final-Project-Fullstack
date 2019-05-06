import styled from "styled-components";

const NumberButton = styled.button`
  background: #abd5ec;
  border-color: #abd5ec;
  border-radius: 8px;
  outline: none;
  margin: 0 5px;
  -webkit-appearance: none;
  outline: none;
`;

const NumberButtonContainer = styled.div`
  margin: 15px;
`;

const NextBackButton = styled.button`
  background: #abd5ec;
  border-color: #abd5ec;
  border-radius: 8px;
  outline: none;
  margin: 0 auto;
  -webkit-appearance: none;
  outline: none;
  margin: 0 5px;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

export {
  NumberButton,
  NextBackButton,
  PaginationContainer,
  NumberButtonContainer
};
