import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import './UpdateAddForm.css'

export default function ActivityUpdate() {
    const initialState = {
        id: "",
      }

    const [getState, setGetState] = useState(initialState)
    const [activityDetails, setActivityDetails] = useState(null)

    const handleChangeGet = (event) => setGetState({...getState, [event.target.id]: event.target.value})

    const handleGet = async (event) => {
        event.preventDefault()
        console.log(getState)
        const dataIDtoUpdate = getState.id
        console.log(`data id: ${dataIDtoUpdate}`)

        try {
            const response = await axios.get(
                `http://localhost:3001/activity/${dataIDtoUpdate}`
            )
            console.log("ID found")
            setActivityDetails(response.data)
        } catch (error) {
            console.error("Activity not found", error)
        }
    }

    const handleChangeUpdate = (event) => {
        setActivityDetails({
          ...activityDetails,
          [event.target.id]: event.target.value
        })
    }

    const handleCheckboxUpdate = (event) => {
        setActivityDetails({
          ...activityDetails,
          [event.target.id]: event.target.checked
        })
      }
    
    const handleSubmitUpdate = async (event) => {
    event.preventDefault()

        try {
            const response = await axios.put(
            `http://localhost:3001/activity/${getState.id}`,
            activityDetails
            )

            if (response.status === 200) {
            console.log("Data updated successfully.")
            } else {
            console.error("Data could not be updated.")
            }
        } catch (error) {
            console.error("An error occurred:", error)
        }
    }

    return (
        <div className="update">
            <form className="grid" onSubmit={handleGet}>
            <label htmlFor="id">Activity ID:</label>
            <input
                type="text"
                id="id"
                name=""
                onChange={handleChangeGet}
                value={getState.id}
                required
                />
                <br></br>
                <button type="submit">Find Activity</button>
            </form>

            {activityDetails && (
                <form className="grid" onSubmit={handleSubmitUpdate}>
                    <h1>Update Activity</h1>
                    <label htmlFor="name">Name:</label>
                    <input
                        name=""
                        id="name"
                        cols="30"
                        rows="2"
                        onChange={handleChangeUpdate}
                        value={activityDetails.name}
                    />
                    <label htmlFor="type">Type:</label>
                    <select id="type" onChange={handleChangeUpdate} value={activityDetails.type}>
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
                        onChange={handleChangeUpdate}
                        value={activityDetails.number}
                    />

                    <label htmlFor="address">Address:</label>
                    <input
                        name=""
                        id="address"
                        cols="30"
                        rows="2"
                        onChange={handleChangeUpdate}
                        value={activityDetails.address}
                    />

                    <label htmlFor="url">URL:</label>
                    <input
                        name=""
                        id="url"
                        cols="30"
                        rows="2"
                        onChange={handleChangeUpdate}
                        value={activityDetails.url}
                    />

                    <label htmlFor="priceRating">Price Rating:</label>
                    <select
                        id="priceRating"
                        onChange={handleChangeUpdate}
                        value={activityDetails.priceRating}
                    >
                        <option value="free">Free</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select><br />

                    <label htmlFor="familyFriendly" className="checkbox">
                        Family Friendly:{" "}
                        <input
                        id="familyFriendly"
                        type="checkbox"
                        onChange={handleCheckboxUpdate}
                        checked={activityDetails.familyFriendly}
                        />
                    </label><br />

                    <label htmlFor="district">District:</label>
                    <select
                        id="district"
                        onChange={handleChangeUpdate}
                        value={activityDetails.district}
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
                    </select><br />

                    <label htmlFor="image">Image url:</label>
                    <input
                        name=""
                        id="image"
                        cols="30"
                        rows="2"
                        onChange={handleChangeUpdate}
                        value={activityDetails.image}
                    />

                    <label htmlFor="description">Description:</label>
                    <input
                        name=""
                        id="description"
                        cols="30"
                        rows="4"
                        onChange={handleChangeUpdate}
                        value={activityDetails.description}
                    />
                    <button type="submit">Update</button>
                </form>
            )}
        </div>
    )
}
    