import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function HotelPage() {

    const [hotel, setHotel] = useState(null)

    const { id } = useParams()

    

    useEffect(() => {
        const getHotelDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/hotel`)
                setHotel(response.data[id])
            } catch (error) {
                console.error("Error fetching hotel details:", error);
                setHotel(null)
            }
        }
        getHotelDetails()
    }, [id])

    return hotel ? (
        <div className="hotel-details">
            <Card
                key={hotel.id}
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt={hotel.name}
                    src="/assets/hotelExample.jpg"
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
                    <CardText>
                        Address: {hotel.address}<br/>
                        Phone: {hotel.phone_number}<br/>
                        Amenities: {hotel.amenities}<br/>
                    </CardText>
                </CardBody>
                <Link to="/HotelList">Close X</Link>
            </Card>
        </div>
    ) : <h2 className="Finding">Loading Hotel...</h2>
}