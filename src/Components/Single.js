// components/SingleTrain.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Traindata from '..//Data/Traindata';

const Single = () => {
  const { trainId } = useParams();
  const train = Traindata.find((train) => train.id === Number(trainId));

  if (!train) {
    return <div>Train not found</div>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      <p>Origin: {train.origin}</p>
      <p>Destination: {train.destination}</p>
      <p>Departure Time: {train.departureTime}</p>
      <p>Arrival Time: {train.arrivalTime}</p>
    </div>
  );
};

export default Single;
