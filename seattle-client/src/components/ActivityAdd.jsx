import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function addActivity() {
  const initialState = {
    name: "",
    type: "nature",
    number: "",
    address: "",
    url: "",
    priceRating: "free",
    familyFriendly: false,
    district: "Northwest Seattle",
    image: "",
    description: "",
  };

  const [formState, setFormState] = useState(initialState);

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
        console.log("Data added successfully.");
        // Clear the form after adding data to the database
        setFormState(initialState);
      } else {
        console.error("Data could not be added.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      {/* ADD */}
      <div className="add">
        <h1>Add an Activity</h1>
        <form className="grid" onSubmit={handleSubmit}>
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={handleChange} value={formState.type}>
            <option value="nature">Nature</option>
            <option value="nightlife">Nightlife</option>
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="landmarks">Landmarks</option>
          </select>

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
          </select>

          <label htmlFor="familyFriendly">
            Family Friendly:{" "}
            <input
              id="familyFriendly"
              type="checkbox"
              onChange={handleCheckbox}
              checked={formState.familyFriendly}
            />
          </label>

          <label htmlFor="district">District:</label>
          <select
            id="district"
            onChange={handleChange}
            value={formState.district}
          >
            <option value="654a5d9082ebbef4acc730a4">Northwest Seattle</option>
            <option value="654a5d9082ebbef4acc730a5">Northeast Seattle</option>
            <option value="654a5d9082ebbef4acc730a6">
              Magnolia & Queen Anne
            </option>
            <option value="654a5d9082ebbef4acc730a7">Central Seattle</option>
            <option value="654a5d9082ebbef4acc730a8">Downtown Seattle</option>
            <option value="654a5d9082ebbef4acc730a9">
              West Seattle & Delridge
            </option>
            <option value="654a5d9082ebbef4acc730aa">Southeast Seattle</option>
          </select>

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
        </form>
      </div>
      <Link to="/deleteactivity/:id">
        <button>Delete Activity</button>
      </Link>
    </>
  );
}
