import { useContext, useState, useEffect } from 'react'
import { DetailsContext } from '../DataContext'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
// import SearchBar from './SearchBar' to add in later, perhaps
import { Card, CardBody, CardTitle, CardSubtitle, CloseButton, ListGroup, ListGroupItem } from 'reactstrap'

export default function RestaurantPage() {
    
    const { details, setDetails } = useContext(DetailsContext)

    const clearContext = () => setDetails({})

    //need to either get context to persist through a refresh or trigger a redirect back to the list page on refresh... 

    return details ? (
        <Card
            key={details._id}
            style={{ width: '70vw' }}
        >
            <CardBody>
                <CardTitle tag='h5'>
                    {details.name}
                </CardTitle>
                <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    {(details.cuisine).charAt(0).toUpperCase() + (details.cuisine).slice(1)}
                    {/* search can still be case insensitive, but since these are one word we can capitalize the first letter of cultures! */}
                </CardSubtitle>
                </CardBody>
                <img
                alt='picture of a place setting'
                src='/assets/restaurantExample.jpg'
                />
                <CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            Type: {details.type}
                        </ListGroupItem>
                        <ListGroupItem>
                            Value rating: {details.priceRating}/5
                        </ListGroupItem>
                        <ListGroupItem>
                            Customer rating: {details.rating}/5
                        </ListGroupItem>
                        <ListGroupItem>
                            Address: {details.address}
                        </ListGroupItem>
                        <ListGroupItem>
                            Phone: {details.number}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to={details.url}>Visit Website</Link>
                        </ListGroupItem>
                    </ListGroup>
                <Link
                    to={`/RestaurantList`}
                    onClick={() => clearContext()}
                    className='btn'
                    style={{
                        backgroundColor: 'rgb(110, 117, 124)',
                        color: 'white'
                    }}
                >Back to List...</Link>
            </CardBody>
        </Card>
    ) : <div className='err'>
        <p>Hm, something went wrong. Try again in a moment.</p>
        </div>
        
 
}

// export default function RestaurantPage() {
    
//     const { id } = useParams()

//     useEffect(()=>{
//         const getRestaurant = async() =>{
//             const result = await axios.get(`${BASE_URL}/restaurant/${id}`)
//             console.log(result)
//         }
//         getRestaurant()
//     },[])//this should also run on mount

//     return (
//         <p>fuck</p>
//     )
// }