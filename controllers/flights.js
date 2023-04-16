import { Flight } from "../models/flight.js"

const index = async (req, res) => {

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
    console.log()
  }catch(err){
    console.log(err)
  } finally {
    res.redirect('/flights')
  }
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