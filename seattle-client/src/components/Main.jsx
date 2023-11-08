import { Route, Routes } from 'react-router-dom'
import Home from './Home'
// import SearchResults from './SearchResults'
import RestaurantList from './RestaurantList'
import RestaurantPage from './RestaurantPage'
// import ActivityList from './ActivityList'
// import ActivityPage from './ActivityPage'
import HotelList from './HotelList'
import HotelPage from './HotelPage'
// import DistrictList from './DistrictList'
//will need to add additional routes for CRUD down the road


export default function Main() {
    return (
        <div className='routesContainer'>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/SearchResults' element={< SearchResults />} /> */}
                <Route path='/RestaurantList' element={<RestaurantList />} />
                <Route path='/RestaurantList/:id' element={<RestaurantPage />} /> 
                {/* <Route path='/ActivityList' element={<ActivityList />} />
                <Route path='/ActivityPage' element={<ActivityPage />} />  */}
                <Route path='/HotelList' element={<HotelList />} />
                <Route path='/HotelList/:id' element={<HotelPage />} />
                {/* <Route path='/DistrictList' element={<DistrictList />} /> */}
            </Routes>
        </div>
    )
}