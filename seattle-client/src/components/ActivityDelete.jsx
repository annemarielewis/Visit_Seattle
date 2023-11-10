import axios from "axios";
import { useState } from "react";
import Message from "./Message";

export default function deleteActivity() {
  const initialState = {
    id: "",
  };

  const [deleteState, setDeleteState] = useState(initialState);
  const [message, setMessage] = useState({})

  const handleChangeDelete = (event) =>
    setDeleteState({ ...deleteState, [event.target.id]: event.target.value });

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log(deleteState);
    const dataIDToDelete = deleteState.id;
    console.log(`data id: ${dataIDToDelete}`);

    try {
      await axios.delete(
        `http://localhost:3001/deleteactivity/${dataIDToDelete}`
      );
      setDeleteState(initialState);
      setMessage({ className: 'success', text: 'Activity deleted.' })
    } catch (error) {
      setMessage({ className: 'error', text: 'Something went wrong. Please try again.' })
    }
  };
  return (
    <div className="delete">
      <h1>Delete an Activity</h1>
      <form className="grid" onSubmit={handleDelete}>
        <label htmlFor="id">Activity ID:</label>
        <input
          type="text"
          id="id"
          name=""
          onChange={handleChangeDelete}
          value={deleteState.id}
          required
        />
        <br></br>
        <button type="submit">Delete Activity</button>
      </form>
      <Message message={message} />
    </div>
  );
}
