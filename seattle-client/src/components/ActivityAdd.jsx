import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals";

import Message from './Message'

export default function addActivity() {
  const initialState = {
    name: "",
    type: "nature",
    number: "",
    address: "",
    url: "",
    priceRating: "free",
    familyFriendly: false,
    district: "",
    image: "",
    description: "",
  };

  const [message, setMessage] = useState({}) //will use this for a conditionally rendered success message
  const [formState, setFormState] = useState(initialState);
  const [districts, setDistricts] = useState([])

  //this function will let us get the district ids dynamically
  useEffect(() => {
    try {
      async function getDistricts() {
        const response = await axios.get(`${BASE_URL}/district`)
        setDistricts(response.data)
      }
      getDistricts()
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  const handleChange = (event) =>
    setFormState({ ...formState, [event.target.id]: event.target.value });

  //can't get 'value' from a checkbox, have to get whether or not it's checked to access the boolean - so this is a specific change handler for the checkbox
  const handleCheckbox = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);
    //functionality for adding to database: Prepare the data to be sent to the backend
    //hold the phone, I think you could just use formState instead of an entirely new object
    const dataToAdd = {
      name: formState.name,
      type: formState.type,
      number: formState.number,
      address: formState.address,
      url: formState.url,
      priceRating: formState.priceRating,
      familyFriendly: formState.familyFriendly,
      district: formState.district,
      image: formState.image,
      description: formState.description,
    };


    try {
      // Send a POST request to your backend API
      const response = await axios.post(
        "http://localhost:3001/activity",
        dataToAdd
      );
      // Check if the data was successfully added to the database
      if (response.status === 201) {
        setMessage({ className: 'success', text: 'Activity added!' });
        // Clear the form after adding data to the database
        setFormState(initialState);
      } else {
        setMessage({ className: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ className: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <>
      {/* ADD */}
      <div className="add">

        <form className="grid" onSubmit={handleSubmit}>
          <h1>Add an Activity</h1>

          {districts.length === 0 ? <p className='error'>Server error, please try again later</p> :
            <>
              <label htmlFor="name">Name:</label>
              <input
                name=""
                id="name"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.name}
              />
              <label htmlFor="type">Type:</label>
              <select id="type" onChange={handleChange} value={formState.type}>
                <option value="nature">Nature</option>
                <option value="nightlife">Nightlife</option>
                <option value="sports">Sports</option>
                <option value="history">History</option>
                <option value="art">Art</option>
                <option value="music">Music</option>
                <option value="landmarks">Landmarks</option>
              </select><br />

              <label htmlFor="number">Phone number:</label>
              <input
                name=""
                id="number"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.number}
              />

              <label htmlFor="address">Address:</label>
              <input
                name=""
                id="address"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.address}
              />

              <label htmlFor="url">URL:</label>
              <input
                name=""
                id="url"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.url}
              />

              <label htmlFor="priceRating">Price Rating:</label>
              <select
                id="priceRating"
                onChange={handleChange}
                value={formState.priceRating}
              >
                <option value="free">Free</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select><br />

              <label htmlFor="familyFriendly">
                Family Friendly:{" "}
                <input
                  id="familyFriendly"
                  type="checkbox"
                  onChange={handleCheckbox}
                  checked={formState.familyFriendly}
                />
              </label><br />

              <label htmlFor="district">District:</label>
              <select
                id="district"
                onChange={handleChange}
                value={formState.district}
              >
                <option value=''>select a district...</option>
                {districts.map((district) => 
                  <option key={district._id} value={district._id}>{district.name}</option>
                )}
              </select>
              <br />

              <label htmlFor="image">Image url:</label>
              <input
                name=""
                id="image"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.image}
              />

              <label htmlFor="description">Description:</label>
              <input
                name=""
                id="description"
                cols="30"
                rows="2"
                onChange={handleChange}
                value={formState.description}
              />
              <button type="submit">Send</button>
              <Message message={message} />
            </>}
        </form>
      </div>
    </>
  )
}
