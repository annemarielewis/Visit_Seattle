import { Link, useLocation } from 'react-router-dom'

export default function Nav () {

    const location = useLocation()
    const activeMenuItemClass = 'active-menu-item'

    return (
        <div className='Navbar'>
            <Link to="/" className="{location.pathname === '/' ? activeMenuItemClass : ''}">Home</Link>
            <Link to="/DistrictList">Districts</Link>
            <Link to="/ActivityList" className={location.pathname === '/ActivityList' ? activeMenuItemClass : ''}>Things To Do</Link>
            <Link to="/HotelList" className={location.pathname === '/HotelList' ? activeMenuItemClass : ''}>Places to Stay</Link>
            <Link to="/RestaurantList" className={location.pathname === '/RestaurantList' ? activeMenuItemClass : ''}>Where to Eat</Link>
            <Link to="/Admin" className={location.pathname === '/Admin' ? activeMenuItemClass : ''}>Admin</Link>
        </div>
    )
}