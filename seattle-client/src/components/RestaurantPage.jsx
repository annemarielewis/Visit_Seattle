import { useContext, useState, useEffect } from 'react'
import { DetailsContext } from '../DataContext'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
// import SearchBar from './SearchBar' to add in later, perhaps
import { Card, CardBody, CardTitle, CardSubtitle, CloseButton, ListGroup, ListGroupItem } from 'reactstrap'

export default function RestaurantPage() {
    
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState(null)

    useEffect(()=>{
        const getRestaurant = async() =>{
            try{
                const result = await axios.get(`${BASE_URL}/restaurant/${id}`)
                setRestaurant(result.data)
            } catch (error) {
                console.error('Error fetching restaurant data.', error)
                setRestaurant({})
            }
        }
        getRestaurant()
    },[])//this should also run on mount

    return restaurant ? ( 
        <Card
            key={restaurant._id}
            style={{ width: '70vw' }}
        >
            <CardBody>
                <CardTitle tag='h5'>
                    {restaurant.name}
                </CardTitle>
                <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    {(restaurant.cuisine).charAt(0).toUpperCase() + (restaurant.cuisine).slice(1)}
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
                            Type: {restaurant.type}
                        </ListGroupItem>
                        <ListGroupItem>
                            Value rating: {restaurant.priceRating}/5
                        </ListGroupItem>
                        <ListGroupItem>
                            Customer rating: {restaurant.rating}/5
                        </ListGroupItem>
                        <ListGroupItem>
                            Address: {restaurant.address}
                        </ListGroupItem>
                        <ListGroupItem>
                            Phone: {restaurant.number}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to={restaurant.url}>Visit Website</Link>
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


//useContext way (suboptimal because of the refresh issue, so ultimately rejected)
// export default function RestaurantPage() {

//     console.log()
    
    // const { details, setDetails } = useContext(DetailsContext)
    // const clearContext = () => setDetails({})

    //need to either get context to persist through a refresh or trigger a redirect back to the list page on refresh... 

    // return restaurantId ? ( 
        // <Card
        //     key={details._id}
        //     style={{ width: '70vw' }}
        // >
        //     <CardBody>
        //         <CardTitle tag='h5'>
        //             {details.name}
        //         </CardTitle>
        //         <CardSubtitle className='mb-2 text-muted' tag='h6'>
        //             {(details.cuisine).charAt(0).toUpperCase() + (details.cuisine).slice(1)}
        //             {/* search can still be case insensitive, but since these are one word we can capitalize the first letter of cultures! */}
        //         </CardSubtitle>
        //         </CardBody>
        //         <img
        //         alt='picture of a place setting'
        //         src='/assets/restaurantExample.jpg'
        //         />
        //         <CardBody>
        //             <ListGroup flush>
        //                 <ListGroupItem>
        //                     Type: {details.type}
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     Value rating: {details.priceRating}/5
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     Customer rating: {details.rating}/5
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     Address: {details.address}
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     Phone: {details.number}
        //                 </ListGroupItem>
        //                 <ListGroupItem>
        //                     <Link to={details.url}>Visit Website</Link>
        //                 </ListGroupItem>
        //             </ListGroup>
        //         <Link
        //             to={`/RestaurantList`}
        //             onClick={() => clearContext()}
        //             className='btn'
        //             style={{
        //                 backgroundColor: 'rgb(110, 117, 124)',
        //                 color: 'white'
        //             }}
        //         >Back to List...</Link>
        //     </CardBody>
        // </Card>
//     ) : <div className='err'>
//         <p>Hm, something went wrong. Try again in a moment.</p>
//         </div>
        
 
// }

