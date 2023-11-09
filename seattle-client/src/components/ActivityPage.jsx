import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../globals";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Spinner,
} from "reactstrap";

export default function ActivityPage() {
  const [activity, setActivity] = useState(null);

  //useParams() is taking the id from what's in the route in Main.js. Destructuring the id to what is at the end of the url in Main.
  const { id } = useParams();

  useEffect(() => {
    const getActivityDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/activity`);
        setActivity(response.data[id]);
      } catch (error) {
        console.error("Error fetching activity details:", error);
        setActivity(null);
      }
    };
    getActivityDetails();
  }, [id]);

  return activity ? (
    <div className="card-details">
      <Card
        key={activity._id}
        style={{
          width: "18rem",
        }}
      >
        <img alt={activity.name} src={activity.image} />
        <CardBody>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Rating: {activity.rating}/5
          </CardSubtitle>
          <CardText>
            Address: {activity.address}
            <br />
            Phone: {activity.phone_number}
            <br />
            Amenities: {activity.amenities}
            <br />
          </CardText>
        </CardBody>
        <Link to="/ActivityList">Close X</Link>
      </Card>
    </div>
  ) : (
    <Spinner className="m-5" color="primary">
      Loading...
    </Spinner>
  );
}
