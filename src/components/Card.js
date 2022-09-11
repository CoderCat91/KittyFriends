import React from 'react';

const Card = ({ name, cuteness, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='Robots' src={`https://robohash.org/set_set4/bgset_bg1/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <h4>Cuteness rating: {cuteness}</h4>
      </div>
    </div>
  );
}

export default Card;