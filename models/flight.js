import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0,
  }
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: { 
    type: String, 
    required: true,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function(){
      let newDate = new Date()
      newDate.setFullYear(newDate.getFullYear()+1)
      return newDate
    }
  },
  tickets: [ticketSchema]
}, {
  timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}