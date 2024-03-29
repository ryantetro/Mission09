import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string; // Assuming this is equivalent to 'mascot'
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <header>
      <h1>March Madness</h1>
      <p>
        Take a look at all of the teams that have a chance to participate in
        March Madness!
      </p>
    </header>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    // Correctly destructure props here
    const { school, name, city, state } = this.props;

    return (
      <div className="team-info">
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h4>
          Location: {city}, {state}
        </h4>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
