import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
// import { BASE_URL } from "../globals"
// import HOTEL_DATA from './HotelData'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function HotelPage() {
    // const { id } = useParams()

    // const hotel = HOTEL_DATA.find((hotel) => hotel.name === id)

    // useEffect(() => {
    //     const getHotelDetails = async () => {
    //         try {
    //             const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
    //             // Use [0] because it returns an array
    //             setHotel(response.data.hotels[0])
    //         } catch (error) {
    //             console.error("Error fetching hotel details:", error);
    //             setHotel(null)
    //         }
    //     }
    //     getHotelDetails()
    // }, [id])

    return hotel ? (
        <div className="hotel-details">
            {/* <Card
                key={hotel.name}
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
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
                        Phone: {hotel.number}<br/>
                        Amenities: {hotel.amenities}<br/>
                    </CardText>
                </CardBody>
            </Card>
            <Link to="/HotelList">Return to Hotel List</Link> */}
        </div>
    ) : <h2 className="Finding">Loading Hotel...</h2>
}