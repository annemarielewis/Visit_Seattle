import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='Navbar'>
            <Link to="/">Home</Link>
            <Link to="/DistrictList">Districts</Link>
            <Link to="/ActivityList">Things To Do</Link>
            <Link to="/HotelList">Places to Stay</Link>
            <Link to="/RestaurantList">Where to Eat</Link>
        </div>
    )
}