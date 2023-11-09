import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from '../globals'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import HotelPage from './HotelPage'

export default function HotelList() {

    const [hotels, setHotels] = useState([])
    const [selectedHotel, setSelectedHotel] = useState(null)

    useEffect(() => {
            const getHotels = async () => {
                const response = await axios.get(`${BASE_URL}/hotel`)
                setHotels(response.data)
                console.log(response)
            }
            getHotels()
    }, [])

    const showHotelDetails = (hotel) => {
        setSelectedHotel(hotel)
    }

    const closeHotelDetails = (hotel) => {
        setSelectedHotel(null)
    }

    return (
        <div>
            {hotels.length === 0 ? (
                <h2 className="Loading">Loading Please Wait...</h2>
            ) : (
                <div className="card-list">
                    {hotels.map((hotel, key) => (
                        <Card className="card" key={hotel._id} style={{width: '18rem'}}>
                            <img alt={hotel.name} src={hotel.img}/>
                            <CardBody>
                                <CardTitle tag="h5">{hotel.name}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
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
                    <HotelPage hotel={selectedHotel} onClose={closeHotelDetails}/>
                )}
        </div>
    );
}