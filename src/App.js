import React from 'react';
import './App.css';

const Card = ({ image, title, description }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  // CardList Component
  const CardList = ({ cards }) => {
    return (
      <div className="card-list">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </div>
    );
  };

  
const App = () => {
  const cardData = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'This is the description for card 1.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'This is the description for card 2.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'This is the description for card 3.',
    },
  ];

  return (
    <div className="app">
      <h1>Card Collection</h1>
      <CardList cards={cardData} />
    </div>
  );
};

export default App;