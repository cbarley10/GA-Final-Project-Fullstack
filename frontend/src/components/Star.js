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
      if (liked || mappedFavorites.includes(item.name)) {
        console.log(item);
        this.setState({
          liked: false
        });
        handleUnfavoriteClick(item);
      } else {
        this.setState({
          liked: true
        });
        handleFavoriteClick(item);
      }
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
