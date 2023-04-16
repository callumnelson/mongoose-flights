import { Flight } from "../models/flight.js"

const index = async (req, res) => {
  try {
    const flights = await Flight.find({})
    console.log(flights)
    res.render('flights/index', {
      title: 'All Flights',
      flights
    })
  }catch(err){
    console.log(err)
    res.redirect('/')
  }
}

const newFlight = async (req, res) => {
  res.render('flights/new', {
    title:'Add Flight'
  })
}

const create = async (req, res) => {
  try {
    // Get rid of property if it isn't defined so we can use default value
    for (let key in req.body){
      console.log(key, req.body[key])
      if (req.body[key] === '') delete req.body[key]
    }
    await Flight.create(req.body)
  }catch(err){
    console.log(err)
  } finally {
    res.redirect('/flights/new')
  }
}

const deleteFlight = async (req, res) => {

}

const show = async (req, res) => {

}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show
}