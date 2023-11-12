import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import DistrictPage from './DistrictPage'

export default function DistrictList() {

    const [districts, setDistricts] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState(null)

    useEffect(() => {
        const getDistricts = async () => {
            const response = await axios.get(`${BASE_URL}/district`)
            setDistricts(response.data)
        }
        getDistricts()
    }, [])

    const showDistrictDetails = (district) => {
        setSelectedDistrict(district)
    }

    const closeDistrictDetails = (district) => {
        setSelectedDistrict(null)
    }

    return (
        <>
            <div className="districtMapDiv">
                <img className='districtMap' alt="map of Seattle's seven districts" src="assets/districtMap.png" />
            </div>
            <div>
            {districts.length === 0 ? (
                <h2 className="Loading">Loading Please Wait...</h2>
            ) : (
                <div className="card-list">
                    {districts.map((district, key) => (
                        <Card className="card" key={district._id} style={{width: '18rem'}}>
                            <img alt={district.name} src={district.img}/>
                            <CardBody className="overlay">
                                <CardTitle tag="h5">{district.name}</CardTitle>
                                {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Population: {district.population}
                                </CardSubtitle> */}
                                <Button onClick={() => showDistrictDetails(district)}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div> 
                )}
                {selectedDistrict && (
                    <DistrictPage district={selectedDistrict} onClose={closeDistrictDetails}/>
                )}
        </div>
        </>
    )
}


                                // <CardText>
                                //     Did you know?
                                // </CardText>
                                // <CardText>
                                //     {district.fact}
                                // </CardText>