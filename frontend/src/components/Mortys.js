import React from "react";
import {
  MortyImage,
  MortyCard,
  MortyContainer
} from "../styled-components/MortyStyled";
import Star from "./Star";

const Mortys = props => {
  const {
    data,
    handleFavoriteClick,
    handleUnfavoriteClick,
    favoritedItems
  } = props;

  return (
    <MortyContainer className="container">
      {data &&
        data.map(card => {
          return (
            <MortyCard key={card._id ? card._id : card.id} className="card">
              <span className="star">
                <Star
                  characterName={card.name}
                  characterBody={card}
                  favoritedItems={favoritedItems}
                  handleUnfavoriteClick={handleUnfavoriteClick}
                  handleFavoriteClick={handleFavoriteClick}
                />
              </span>
              <MortyImage src={card.image} alt={card.image} />
              <h1>{card.name}</h1>
              <p>
                Status:{" "}
                <span className={`${card.status.toLowerCase()} status`}>
                  {card.status}
                </span>
              </p>
              <p className="species">
                Species:{" "}
                <span className={card.species.toLowerCase()}>
                  {card.species}
                </span>
              </p>
            </MortyCard>
          );
        })}
    </MortyContainer>
  );
};

export default Mortys;
