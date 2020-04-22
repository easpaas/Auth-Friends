import React from 'react';
import '../App.css';

const Friend = ({name, age, email}) => {
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
}

export default Friend;