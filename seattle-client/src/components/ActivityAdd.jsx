import axios from "axios";
import { useState } from "react";

export default function addActivity() {
  const initialState = {
    name: "",
    type: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) =>
    setFormState({ ...formState, [event.target.id]: event.target.value });

  console.log(formState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);
    //functionality for adding to database: Prepare the data to be sent to the backend
    const dataToAdd = {
      name: formState.name,
      type: formState.type,
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
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit">Send</button>
      </form>
    </>
  );
}
