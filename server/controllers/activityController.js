const Activity = require('../models/activity')

module.exports = {
    getAllActivities,
    getOneActivity,
    createActivity,
    updateActivity,
    deleteActivity
}

async function getAllActivities(req, res) {
    try {
        const activities = await Activity.find()
        res.json(activities)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getOneActivity(req, res) {
    try {
        const id = req.params.id
        const activity = await Activity.findById(id)
        if (activity) {
            return res.json(activity)
        }
        return res.status(404).send('Activity with specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function createActivity(req, res) {
    try {
        const activity = await new Activity(req.body)
        await activity.save()
        return res.status(201).json({activity})
        // return res.redirect('')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateActivity(req, res) {
    try {
        const id = req.params.id
        let activity = await Activity.findByIdAndUpdate(id, req.body, { new: true })
        if (activity) {
            return res.status(200).json(activity)
        }
        throw new Error("Activity not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteActivity(req, res) {
    try {
        const id = req.params.id
        let activity = await Activity.findByIdAndDelete(id)
        if (activity) {
            return res.status(200).json(activity)
        }
        throw new Error("Activity not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}