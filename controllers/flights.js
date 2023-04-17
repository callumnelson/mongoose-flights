import { Flight } from "../models/flight.js"

const index = async (req, res) => {
  try {
    const flights = await Flight.find({})
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
  try {
    const deleted = await Flight.findByIdAndRemove(req.params.flightId)
  } catch (err) {
    console.log(err)
  } finally {
    res.redirect('/flights')
  }
}

const show = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.flightId)
    res.render('flights/show', {
      flight,
      title: `Flight Details`
    })
  } catch (err) {
    console.log(err)
  }
}

const editFlight = async (req, res) => {
  try {
    // get data for current todo
    const flight = await Flight.findById(req.params.flightId)
    // render a view (edit view) 
    res.render('flights/edit', {
      flight,
      title: 'Edit Flight'
    })
  } catch (err) {
    console.log(err)
    res.redirect('/flights')
  }
}

const update = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.flightId, { $set: req.body }, {new: true})
    res.redirect(`/flights/${flight._id}`)
  } catch (err) {
    console.log(err)
    res.redirect('/flights')
  }
}

const createTicket = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.flightId)
    flight.tickets.push(req.body)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)
  } catch (err) {
    
  }
}

const deleteTicket = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.flightId)
    flight.tickets.id(req.params.ticketId).deleteOne()
    await flight.save()
  } catch (err) {
    console.log(err)
  } finally {
    res.redirect(`/flights/${req.params.flightId}`)
  }
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
  editFlight as edit,
  update,
  createTicket,
  deleteTicket
}