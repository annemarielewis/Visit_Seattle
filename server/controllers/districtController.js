const { District } = require('../models') //if the district schema is in models index.js I'll be able to pull it here

module.exports = {
    getAllDistricts,
    getOneDistrict,
    createDistrict,
    updateDistrict,
    deleteDistrict
}

async function getAllDistricts(req, res) {
    try {
        const districts = await District.find()
        return res.json(districts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getOneDistrict(req, res) {
    try {
        const id = req.params.id
        const district = await District.findById(id)
        if (district) {
            return res.json(district)
        } else {
            return res.status(404).send('District not found.')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createDistrict(req, res) {
    try {
        const district = new District(req.body)
        await district.save()
        return res.status(201).json({ district })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function updateDistrict(req, res) {
    try {
        const id = req.params.id
        const district = await District.findByIdAndUpdate(id, req.body, { new: true })
        if (district) {
            return res.status(200).json(district)
        } else {
            throw new Error(error.message)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteDistrict(req, res) {
    try {
        const id= req.params.id
        const district = await District.findByIdAndDelete(id)
        if (district) {
            return res.status(200).json(district)
        }
        throw new Error(error.message)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}