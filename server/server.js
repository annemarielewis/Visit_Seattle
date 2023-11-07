const express = require("express")
const db = require("./db/index")
const logger = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const districtController = require('./controllers/districtController')
const activityController = require('./controllers/activityController')
const hotelController = require('./controllers/hotelController')
const restaurantController = require('./controllers/restaurantController')

const PORT = process.env.PORT || 3001;


const app = express()
//middleware:
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//cRud - Read
app.get('/district', districtController.getAllDistricts)
app.get('/district/:id', districtController.getOneDistrict)
app.get('/activity', activityController.getAllActivities)
app.get('/activity/:id', activityController.getOneActivity)
app.get('/hotel', hotelController.getAllHotels)
app.get('/hotel/:id', hotelController.getOneHotel)
app.get('/restaurant', restaurantController.getAllRestaurants)
app.get('/restaurant/:id', restaurantController.getOneRestaurant)

//crud read (for searching activities by type)
app.get('/nature', activityController.getNatureActivities)
app.get('/nightlife', activityController.getNightlifeActivities)
app.get('/history', activityController.getHistoryActivities)
app.get('/music', activityController.getMusicActivities)
app.get('/art', activityController.getArtActivities)
app.get('/sports', activityController.getSportActivities)
app.get('/landmark', activityController.getLandmarkActivities)

//Crud - Create
app.post('/district', districtController.createDistrict)
app.post('/activity', activityController.createActivity)
app.post('/hotel', hotelController.createHotel)
app.post('/restaurant', restaurantController.createRestaurant)

//crUd - Update
app.put('/district/:id', districtController.updateDistrict)
app.put('/activity/:id', activityController.updateActivity)
app.put('/hotel/:id', hotelController.updateHotel)
app.put('/restaurant/:id', restaurantController.updateRestaurant)

//cruD - Delete
app.delete('/district/:id', districtController.deleteDistrict)
app.delete('/activity/:id', activityController.deleteActivity)
app.delete('/hotel/:id', hotelController.deleteHotel)
app.delete('/restaurant/:id', restaurantController.deleteRestaurant)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))