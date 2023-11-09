import axios from "axios";
import { useState } from "react";

export default function deleteActivity() {
  const initialState = {
    id: "",
  };

  const [deleteState, setDeleteState] = useState(initialState);

  const handleChangeDelete = (event) =>
    setDeleteState({ ...deleteState, [event.target.id]: event.target.value });

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
    </div>
  );
}
