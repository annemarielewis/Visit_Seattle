import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
// import { BASE_URL } from '../globals'
// import SearchBar from "./SearchBar"
import HOTEL_DATA from './HotelData'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'


export default function HotelList() {

    const [hotels, setHotels] = useState(HOTEL_DATA)
    const [selectedHotel, setSelectedHotel] = useState(null)

    // useEffect(() => {
    //     if (searchTerm) {
    //         // Fetch data only when searchTerm is not empty
    //         const getHotels = async () => {
    //             const response = await axios.get(`${BASE_URL}search.php?s=${searchTerm}`)
    //             setHotels(response.data.hotels)
    //             console.log(response)
    //         };
    //         getHotels()
    //     } else {
    //         // Clear the hotels array when searchTerm is empty
    //         setHotels([])
    //     }
    // }, [searchTerm])

    let navigate = useNavigate()

    const showHotelDetails = (hotel) => {
        setSelectedHotel(hotel)
        navigate(`/HotelList/${hotel.name}`)
    }

    // const handleSearch = (term) => {
    //     setSearchTerm(term)
    // }

    return (
        <div>
            {/* <SearchBar onSearch={handleSearch} /> */}
            {hotels.length === 0 ? (
                <h2 className="Loading">Please Enter a Hotel</h2>
            ) : (
                <div className="hotels-list">
                    {hotels.map((hotel) => (
                        <Card
                            //key={hotel.id}
                            key={hotel.name}
                            style={{
                                width: '18rem'
                            }}
                            >
                            <img
                                alt="Sample"
                                //src={hotel.img}
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
                                <Button onClick={() => showHotelDetails(hotel)}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}