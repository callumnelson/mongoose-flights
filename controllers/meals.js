import { Meal } from "../models/meal.js"

const newMeal = async (req, res) => {
  const meals = await Meal.find({})
  res.render('meals/new', {
    title:'Add Meal',
    meals
  })
}

const create = async (req, res) => {
  try {
    await Meal.create(req.body)
  }catch(err){
    console.log(err)
  } finally {
    res.redirect('/meals/new')
  }
}


export {
  newMeal as new,
  create,
}