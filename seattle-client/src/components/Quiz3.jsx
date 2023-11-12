import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"
import axios from "axios"
import QuizResults from './QuizResults'

export default function Quiz3({ category, searchParam }) {

    const searchParamString = searchParam.toString()

    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const [districts, setDistricts] = useState([])

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
    }, [category, searchParam])

    const handleChange = async (e) => {
        //this gets used later, because the state can be used everywhere
        setSelectedDistrict(e.target.value.toString())
        //this const gets used in this function because otherwise I get freaking race conditions everywhere
        const selectedDistrict = e.target.value
        try {
            const response = await axios.get(`${BASE_URL}/${category}`)
            if (category === 'restaurant') {
                setFilteredResults(response.data.filter((result) => {
                    console.log('res', result)
                    console.log('searchParam', searchParam)
                    console.log('selectedDistrict', selectedDistrict)
                    console.log('one', result.cuisine === searchParam)
                    console.log('two', result.district === selectedDistrict)
                    
                    return result.cuisine === searchParamString && result.district === selectedDistrict
                }))

            } else if (category === 'activity') {
                setFilteredResults(response.data.filter((result) =>
                    result.type === searchParam && result.district === selectedDistrict))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //function with a return here, or another component?

    return (
        <>
            <br />
            <label htmlFor='district'>Which district are you in?</label>
            <br />
            <select id='district' onChange={handleChange} defaultValue=''>
                <option value=''>pick an option...</option>
                {districts.map((district) =>
                    <option key={district._id} value={district._id}>{district.name}</option>
                )}
            </select>
            <QuizResults filteredResults={filteredResults} selectedDistrict={selectedDistrict} />
        </>
    )
}