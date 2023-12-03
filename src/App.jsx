import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    console.log('Fetching');
    fetchData();
  }, []);

 const fetchData = async () => {
  try {
    const response = await fetch('https://65676a1d64fcff8d73105558.mockapi.io/api/v1/dogs');
    const data = await response.json();
    console.log('Fetched Data:', data);
    setDogs(data.slice(0, 4));
  } catch (error) {
    console.error('Error fetching:', error);
  }
};

  

  return (
    <div className="container">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

function DogCard({ dog }) {
  const imageUrl = dog.img  
  const breed = dog.type  
  return (
    <div className="card">
      <img src={imageUrl} alt={dog.name} />
      <div className="card-content">
        <h3>{dog.name}</h3>
        <div><h4>{breed}</h4></div>
      </div>
    </div>
  );
}






export default App;
