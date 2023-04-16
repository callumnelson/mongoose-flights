import { Flight } from "../models/flight.js"

const index = async (req, res) => {

}

const newFlight = async (req, res) => {
  res.render('flights/new', {
    title:'Add Flight'
  })
}

const create = async (req, res) => {

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