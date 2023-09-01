import React from 'react'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from '../../assets/data/data'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
    const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
    <ul>
        {mealList}
    </ul>
    </Card>
    </section>
  )
}
