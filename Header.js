import React from 'react';
import bannerImg from './restauranfood.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
            <button aria-label="Reserve a Table">Reserve A Table</button>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Food from restaurant" />
        </div>
      </section>
    </header>
  );
};

export default Header;