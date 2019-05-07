import React, { Component } from "react";
import StyledStar from "../styled-components/StyledStar";

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }
  render() {
    const {
      characterName,
      characterBody,
      favoritedItems,
      handleFavoriteClick,
      handleUnfavoriteClick
    } = this.props;

    const mappedFavorites = favoritedItems.map(fav => fav.name);

    const handleClick = item => {
      const { liked } = this.state;
      this.setState(
        {
          liked: !liked
        },
        () => {
          if (liked) {
            handleUnfavoriteClick(item);
          } else {
            console.log("clicked favorite button!");
            handleFavoriteClick(item);
          }
        }
      );
    };

    return (
      <div>
        {mappedFavorites.includes(characterName) || this.state.liked ? (
          <StyledStar
            className="fas fa-star fa-2x"
            onClick={() => handleClick(characterBody)}
          />
        ) : (
          <StyledStar
            className="far fa-star fa-2x"
            onClick={() => handleClick(characterBody)}
          />
        )}
      </div>
    );
  }
}

export default Star;
