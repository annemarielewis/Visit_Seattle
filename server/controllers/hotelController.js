const { Hotel } = require('../models')

module.exports = {
    getAllHotels,
    getOneHotel,
    createHotel,
    updateHotel,
    deleteHotel
}

async function getAllHotels(req, res) {
    try{
        const hotels = await Hotel.find()
        return res.json(hotels)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getOneHotel(req, res) {
    try{
        const id = req.params.id
        const hotel = await Hotel.findById(id)
        if (hotel) {
            return res.json(hotel)
        } else {
            return res.status(404).send('Hotel not found.')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createHotel(req, res) {
    try {
        const hotel = new Hotel(req.body)
        await hotel.save()
        return res.status(201).json({hotel})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateHotel(req, res) {
    try {
        const id = req.params.id
        const hotel = await Hotel.findByIdAndUpdate(id, req.body, {new: true})
        if (hotel){
            return res.status(200).json(hotel)
        } else {
            throw new Error(error.message)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteHotel (req, res) {
    try{
        const id = req.params.id
        const hotel = await Hotel.findByIdAndDelete(id)
        if(hotel){
            return res.status(200).json(hotel)
        } 
        throw new Error(error.message)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}