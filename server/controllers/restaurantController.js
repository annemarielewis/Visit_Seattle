const { Restaurant } = require('../models')

module.export = {
    getAllRestaurants,
    getOneRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}

async function getAllRestaurants(req, res) {
    try {
        const restaurants = await Restaurant.find()
        return res.json(restaurants)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getOneRestaurant(req, res) {
    try {
        const id = req.params.id
        const restaurant = await Restaurant.findById(id)
        if (restaurant) {
            return res.json(restaurant)
        } else {
            return res.status(404).send('Restaurant not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createRestaurant(req, res) {
    try {
        const restaurant = new Restaurant(req.body)
        await restaurant.save()
        return res.status(201).json({ restaurant })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateRestaurant(req, res) {
    try {
        const id = req.params.id
        const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true })
        if (restaurant){
            return res.status(200).json(restaurant)
        } else {
            throw new Error(error.message)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteRestaurant(req, res) {
    try {
        const id = req.params.id
        const restaurant = await Restaurant.findByIdAndDelete(id)
        if (restaurant) {
            return res.status(200).json(restaurant)
        }
        throw new Error(error.message)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}