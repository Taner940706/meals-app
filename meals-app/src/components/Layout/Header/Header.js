import React from 'react';
import classes from './Header.css'
import mealImage from '../../../assets/meals.jpg'

export default function Header() {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src={mealImage} alt="Meals image, main image" />
    </div>
    </>
  );
};
