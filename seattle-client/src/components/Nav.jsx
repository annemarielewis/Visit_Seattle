import { Link, useLocation } from 'react-router-dom'

export default function Nav () {

    const location = useLocation()
    const activeMenuItemClass = 'active-menu-item'

    return (
        <div className='Navbar'>
            <Link to="/" className={location.pathname === '/' ? activeMenuItemClass : ''}>Home</Link>
            <Link to="/DistrictList">Districts</Link>
            <Link to="/ActivityList">Things To Do</Link>
            <Link to="/HotelList" className={location.pathname === '/HotelList' ? activeMenuItemClass : ''}>Places to Stay</Link>
            <Link to="/RestaurantList">Where to Eat</Link>
        </div>
    )
}