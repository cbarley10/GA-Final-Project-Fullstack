import styled from "styled-components";

const MortyImage = styled.img`
  height: auto;
  background: #f1f1fa;
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 0 auto;
  border: 0;
`;

const MortyCard = styled.div`
  width: 31%;
  padding: 10px;
  margin: 30px 0;
  text-align: center;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const MortyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export { MortyImage, MortyCard, MortyContainer };
