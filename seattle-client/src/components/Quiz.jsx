//ok this first one should just be one initial question that conditionally renders the next question, which is it's own component. easy enough
import { useState } from "react"
import Quiz2 from './Quiz2'

export default function Quiz() {

    const [category, setCategory] = useState('')

    const handleChange = (e) => {
        setCategory(e.target.value)
    }


    return (
        <div className='grid'>
            <h1>Not sure what to do?</h1>
            <label htmlFor='category'>What are you in the mood for?</label>
            <br />
            <select id="category" onChange={handleChange} defaultValue=''>
                <option value=''>pick an option...</option>
                <option value='restaurant'>I want to find a place to eat</option>
                <option value='activity'>I want to find something to do</option>
            </select>
            {category === '' ? null : < Quiz2 category={category} /> }
        </div>
    )
}