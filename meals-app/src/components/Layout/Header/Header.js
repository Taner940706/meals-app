import React from 'react';
import classes from './Header.css'
import mealImage from '../../../assets/meals.jpg'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

export default function Header(props) {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealImage} alt="Meals image, main image" />
    </div>
    </>
  );
};
