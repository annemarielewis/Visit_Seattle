import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from '../globals'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import RestaurantPage from './RestaurantPage'

export default function RestaurantList() {

    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    useEffect(() => {
            const getRestaurants = async () => {
                const response = await axios.get(`${BASE_URL}/restaurant`)
                setRestaurants(response.data)
                console.log(response)
            }
            getRestaurants()
    }, [])

    const showRestaurantDetails = (restaurant) => {
        setSelectedRestaurant(restaurant)
    }

    const closeRestaurantDetails = (restaurant) => {
        setSelectedRestaurant(null)
    }

    return (
        <div>
            {restaurants.length === 0 ? (
                <h2 className="Loading">Loading Please Wait...</h2>
            ) : (
                <div className="card-list">
                    {restaurants.map((restaurant, key) => (
                        <Card className="card" key={restaurant._id} style={{width: '18rem'}}>
                            <img alt={restaurant.name} src={restaurant.img}/>
                            <CardBody className="overlay">
                                <CardTitle tag="h5">{restaurant.name}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Rating: {restaurant.rating}/5
                                </CardSubtitle>
                                <Button onClick={() => showRestaurantDetails(restaurant)}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div> 
                )}
                {selectedRestaurant && (
                    <RestaurantPage restaurant={selectedRestaurant} onClose={closeRestaurantDetails}/>
                )}
        </div>
    );
}