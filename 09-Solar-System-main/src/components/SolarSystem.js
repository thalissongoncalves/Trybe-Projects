import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import "../App.css"

class SolarSystem extends React.Component {
  render() {
    return (
      <div id="solar-system">
        { Planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
