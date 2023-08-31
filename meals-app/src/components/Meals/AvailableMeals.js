import React from 'react'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from '../../assets/data/data'

export default function AvailableMeals() {
    const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
    <ul>
        {mealList}
    </ul>
    </section>
  )
}
