import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ACTIVITY_DATA from "./ActivityData";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

//Initiate function for activities:
export default function ActivityList() {
  let response;
  const [activities, setActivities] = useState([]);

  //UseEffect to define when the activities will load (on page load for this component)
  useEffect(() => {
    const getActivities = async () => {
      response = await axios.get(
        `http://localhost:3001/activity` //IS THIS THE CORRECT URL?
      );
      console.log(response);
      setActivities(response.data.name);
    };
    getActivities();
  }, []);
  console.log(activities);

  //OnClick logic to get to specific activity:
  const [selectedActivity, setSelectedActivity] = useState(null);
  //figure out how to do this functionality: WHY DON;T I HAVE TO PUT IT AS ACTIVITY._ID LIKE HOW ITS WRITTEN BELOW IN THE RETURN?
  const showActivityDetails = (activityId) => {
    setSelectedActivity(activityId);
    navigate(`/activity/${activityId}`);
    console.log(selectedActivity);
  };

  //return statement for the html to display the activities:
  return activities ? (
    <div className="activities">
      <h1 className="page-title">Activities:</h1>
      {activities.map((activity) => (
        <Link to={`/activity/${activity._id}`} key={activity._id}>
          <Card key={activity._id} style={{ width: "18rem" }}>
            <img alt="Sample" src={"activity._image"} />
            <CardBody>
              <CardTitle tag="h5">{activity.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Type of Activity: {activity.type}
              </CardSubtitle>
              <Button onClick={() => showActivityDetails(activity._id)}>
                Details
              </Button>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
}
