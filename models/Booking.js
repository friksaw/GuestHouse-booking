const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
    },
    fromDate: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },
    toDate: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },
})

module.exports = mongoose.models.Booking || mongoose.model('Booking', BookingSchema)