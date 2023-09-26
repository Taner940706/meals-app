import React from 'react'
import {useEffect, useState} from 'react'
import classes from './AvailableMeals.module.css'
// import DUMMY_MEALS from '../../assets/data/data'  when data is DUMMY
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, SetHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://console.firebase.google.com/project/meals-app-bc976/database/meals-app-bc976-default-rtdb/data/~2F.meals.js')
      const responseData = await response.json();

      if (!response.ok){
        throw new Error("Something went wrong!")
      }

      const loadMeals = []
      for (const key in responseData){
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadMeals);
      setLoading(false);
    }; 
      fetchMeals().catch((error) => {
        setLoading(false);
        SetHttpError(error.message);
      })
    
  }, []);

  if (loading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError){
    reyrn (
      <section className={MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }
    const mealList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

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
