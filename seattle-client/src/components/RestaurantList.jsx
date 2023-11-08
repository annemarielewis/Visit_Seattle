import { useContext, useState, useEffect } from 'react'
import { DetailsContext } from '../DataContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
// import SearchBar from './SearchBar' to add in later, perhaps
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function RestaurantList() {

    //axios call and related parts
    const [restaurants, setRestaurants] = useState([]) //we expect this to be set with an array of objects

    useEffect(() => {
        const getRestaurants = async () => {
            const result = await axios.get(`${BASE_URL}/restaurant`)
            setRestaurants(result.data)
        }
        getRestaurants()

    }, []) //I want this to run on mount and get all of the restaurants in seattle for now (until we get a search bar running)

    //for accessing and setting details

    const { details, setDetails } = useContext(DetailsContext) //this is OBJECT destructuring, not array destructuring, because DetailsContext was made an object when the value got sent through as props in App.jsx

    const selectRestaurant = (restaurant) => setDetails(restaurant)

    //this return can be turned into a ternary when we get that search bar working in here
    return (
        <div className='restaurant-list'>
            {restaurants.map((restaurant) =>
            (
                <Card
                    key={restaurant._id}
                    style={{ width: '18rem' }}
                >
                    <img
                        alt='picture of a place setting'
                        src='assets/restaurantExample.jpg'
                    />
                    <CardBody>
                        <CardTitle tag='h5'>
                            {restaurant.name}
                        </CardTitle>
                        <CardSubtitle className='mb-2 text-muted' tag='h6'>
                            {(restaurant.cuisine).charAt(0).toUpperCase() + (restaurant.cuisine).slice(1)}
                            {/* search can still be case insensitive, but since these are one word we can capitalize the first letter of cultures! */}
                        </CardSubtitle>
                        <CardText>
                            Value rating: {restaurant.priceRating}/5
                        </CardText>
                        <Link
                            to={`/RestaurantList/${restaurant._id}`}
                            onClick={() => selectRestaurant(restaurant)}
                            className='btn'
                            style={{
                                backgroundColor: 'rgb(110, 117, 124)',
                                color: 'white'
                            }}
                        >More Details...</Link>
                    </CardBody>
                </Card>
            )
            )}
        </div>
    )
}