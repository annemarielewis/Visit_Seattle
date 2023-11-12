import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from '../globals'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import ActivityPage from './ActivityPage'

export default function ActivityList() {

    const [activities, setActivities] = useState([])
    const [selectedActivity, setSelectedActivity] = useState(null)

    useEffect(() => {
            const getActivities = async () => {
                const response = await axios.get(`${BASE_URL}/activity`)
                setActivities(response.data)
                console.log(response)
            }
            getActivities()
    }, [])

    const showActivityDetails = (activity) => {
        setSelectedActivity(activity)
    }

    const closeActivityDetails = (activity) => {
        setSelectedActivity(null)
    }

    return (
        <div>
            {activities.length === 0 ? (
                <h2 className="Loading">Loading Please Wait...</h2>
            ) : (
                <div className="card-list">
                    {activities.map((activity, key) => (
                        <Card className="card" key={activity._id} style={{width: '18rem'}}>
                            <img alt={activity.name} src={activity.image}/>
                            <CardBody className="overlay">
                                <CardTitle tag="h5">{activity.name}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Type: {activity.type}
                                </CardSubtitle>
                                <Button onClick={() => showActivityDetails(activity)}>
                                    Details
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div> 
                )}
                {selectedActivity && (
                    <ActivityPage activity={selectedActivity} onClose={closeActivityDetails}/>
                )}
        </div>
    );
}