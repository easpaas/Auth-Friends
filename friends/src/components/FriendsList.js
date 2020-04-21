import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

import Friend from './Friend';

const FriendsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
      
    axios.get('http://localhost:5000/api/friends', {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div className="List">
    {
      data.map(friend => {
        return <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
      })
    }
    </div>
  )
}

export default FriendsList;