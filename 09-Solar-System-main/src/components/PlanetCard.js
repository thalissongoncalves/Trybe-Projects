import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const text = `Planeta ${planetName}`;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img alt={ text } src={ planetImage } className={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
