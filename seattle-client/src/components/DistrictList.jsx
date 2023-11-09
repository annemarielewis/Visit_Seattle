import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function DistrictList() {

    const [districts, setDistricts] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState({})

    useEffect(() => {
        const getDistricts = async () => {
            const response = await axios.get(`${BASE_URL}/district`)
            setDistricts(response.data)
        }
        getDistricts()
    }, [])

    return (
        <>
            <div className="districtMapDiv">
                <img className='districtMap' alt="map of Seattle's seven districts" src="assets/districtMap.png" />
            </div>
            <div className='card-list'>
                {
                    districts.map((district) => (
                        <Card
                            className='card'
                            key={district._id}
                            style={{
                                width: '20rem'
                            }}
                        >
                            <img alt='a notable landmark in this district' src={district.img} />
                            <CardBody>
                                <CardTitle tag='h5'>
                                    {district.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Population: {district.population}
                                </CardSubtitle>
                                <CardText>
                                    Did you know?
                                </CardText>
                                <CardText>
                                    {district.fact}
                                </CardText>
                            </CardBody>

                        </Card>
                    ))
                }
            </div>
        </>
    )
}