import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'
// import SearchBar from "./SearchBar"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import HotelOverlay from './Overlay'

export default function HotelList() {

    const [hotels, setHotels] = useState([])
    const [selectedHotel, setSelectedHotel] = useState(null)

    useEffect(() => {
        // if (searchTerm) {
            // Fetch data only when searchTerm is not empty
            const getHotels = async () => {
                const response = await axios.get(`${BASE_URL}/hotel`)
                setHotels(response.data)
                console.log(response)
            }
            getHotels()
        // } else {
        //     // Clear the hotels array when searchTerm is empty
        //     setHotels([])
        // }
        //use "searchTerm" within brackets if search bar used
    }, [])

//   let navigate = useNavigate()

    const showHotelDetails = (hotel) => {
        setSelectedHotel(hotel)
        // navigate(`/HotelList/${key}`)
    }

    const closeHotelDetails = (hotel) => {
        setSelectedHotel(null)
    }

    // const handleSearch = (term) => {
    //     setSearchTerm(term)
    // }

    return (
        <div>
            {hotels.length === 0 ? (
                <h2 className="Loading">Loading Please Wait...</h2>

            ) : (
                <div className="card-list">
                    {hotels.map((hotel, key) => (
                        <Card
                            className="card"
                            key={hotel._id}
                            style={{
                                width: '18rem'
                            }}
                            >
                            <img
                                alt={hotel.name}
                                //src={hotel.img}
                                src={"/assets/hotelExample.jpg"}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {hotel.name}
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                                >
                                Rating: {hotel.rating}
                                </CardSubtitle>
                                <Button onClick={() => showHotelDetails(hotel)}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div> 
                )}
                {selectedHotel && (
                    <HotelOverlay hotel={selectedHotel} onClose={closeHotelDetails}/>
                )}
        </div>
    );
}