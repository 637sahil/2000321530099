// components/TrainList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Traindata from '..//Data/Traindata';
const Trains = () => {
  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {Traindata.map((train) => (
          <li key={train.id}>
            <Link to={`/Traindata/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trains;
