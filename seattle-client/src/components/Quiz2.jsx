import { useState } from "react"
import Quiz3 from './Quiz3'

export default function Quiz2({ category }) {

    const [searchParam, setSearchParam] = useState('')

    const handleChange = (e) => {
        setSearchParam(e.target.value.toLowerCase()) //toLowerCase() to match the db, so this search doesn't have to be case sensitive
        console.log(e.target.value.toLowerCase())
    }

    if (category === 'restaurant') {
        return (
            <>
                <label htmlFor="searchParam">What kind of food sounds good?</label>
                <br />
                <input type='text' id='searchParam' onChange={handleChange} defaultValue='' placeholder='e.g., seafood' />
            </>

        )
    } else if (category === 'activity') {
        return (
            <>
                <br />
                <label htmlFor="searchParam">What sounds fun?</label>
                <br />
                <select id='searchParam' onChange={handleChange} defaultValue=''>
                    <option value=''>pick an option...</option>
                    <option value='nightlife'>Nightlife</option>
                    <option value='sports'>Sports</option>
                    <option value='nature'>Nature</option>
                    <option value='history'>History</option>
                    <option value='art'>Art</option>
                    <option value='music'>Music</option>
                    <option value='landmarks'>Landmarks</option>
                </select>
            </>
        )
    }
}