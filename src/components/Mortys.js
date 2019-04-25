import React from "react";
import {
  MortyImage,
  MortyCard,
  MortyContainer
} from "../styled-components/MortyStyled";

const Mortys = ({ data }) => {
  return (
    <MortyContainer className="container">
      {data &&
        data.map(item => {
          return (
            <MortyCard key={item.id} className="card">
              <MortyImage src={item.image} alt={item.image} />
              <h1>{item.name}</h1>
              <p>
                Status:{" "}
                <span className={item.status.toLowerCase()}>{item.status}</span>
              </p>
              <p className="species">
                Species:{" "}
                <span className={item.species.toLowerCase()}>
                  {item.species}
                </span>
              </p>
            </MortyCard>
          );
        })}
    </MortyContainer>
  );
};

export default Mortys;
