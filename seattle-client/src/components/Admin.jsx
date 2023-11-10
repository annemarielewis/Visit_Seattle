import { Link } from "react-router-dom";

export default function Admin () {

    return (
    <div className='admin-buttons'>
        <Link className='admin-link' to="/deleteactivity/:id">
            <button>Delete Activity</button>
        </Link>
        <Link className='admin-link' to="/activity/:id">
            <button>Update Activity</button>
        </Link>
        <Link className='admin-link' to="/addactivity">
          <button>Add Activity</button>
        </Link>

    </div>
    )
}