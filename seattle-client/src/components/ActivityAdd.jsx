import axios from "axios";
import { useState } from "react";

export default function addActivity() {
  const initialState = {
    name: "",
    type: "",
    number: "",
    address: "",
    url: "",
    priceRating: "",
    familyFriendly: "",
    district: "",
    image: "",
    description: "",
  };

  const [formState, setFormState] = useState(initialState);

  const [deleteState, setDeleteState] = useState(initialState);

  const handleChange = (event) =>
    setFormState({ ...formState, [event.target.id]: event.target.value });

  const handleChangeDelete = (event) =>
    setDeleteState({ ...deleteState, [event.target.id]: event.target.value });

  console.log(formState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);
    //functionality for adding to database: Prepare the data to be sent to the backend
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

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(deleteState);
    const dataIDToDelete = deleteState.id;
    console.log(dataIDToDelete);
    try {
      axios.delete(`http://localhost:3001/deleteactivity/${dataIDToDelete}`);
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
          <label htmlFor="name">Activity:</label>
          <input
            name=""
            id="name"
            cols="30"
            rows="1"
            onChange={handleChange}
            value={formState.activity}
          />

          <label htmlFor="type">Type:</label>
          <input
            name=""
            id="type"
            cols="30"
            rows="2"
            onChange={handleChange}
            value={formState.type}
          />
          <label htmlFor="number">Number:</label>
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
          <input
            name=""
            id="priceRating"
            cols="30"
            rows="2"
            onChange={handleChange}
            value={formState.priceRating}
          />
          <label htmlFor="familyFriendly">Family Friendly:</label>
          <input
            name=""
            id="familyFriendly"
            cols="30"
            rows="2"
            onChange={handleChange}
            value={formState.familyFriendly}
          />
          <label htmlFor="district">District:</label>
          <input
            name=""
            id="district"
            cols="30"
            rows="2"
            onChange={handleChange}
            value={formState.district}
          />
          <label htmlFor="image">Image:</label>
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

        {/* DELETE */}
        <div className="delete">
          <h1>Delete an Activity</h1>
          <form className="grid" onSubmit={handleDelete}>
            <label htmlFor="id">Activity ID:</label>
            <input
              type="text"
              id="id"
              name=""
              onChange={handleChangeDelete}
              value={formState.id}
              required
            />
            <br></br>
            <button type="submit">Delete Activity</button>
          </form>
        </div>

        {/* UPDATE */}
      </div>
    </>
  );
}
