import { Link } from "react-router"

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container">
            <div className="navbar-nav">
                <Link className='nav-link' to="/user/addtask">Add Task</Link>
                <Link className='nav-link' to="/user/tasks">Task List</Link>
                <Link className="nav-link" to="/logout">Sign Out</Link>
            </div>
        </div>
    </nav>
}
export default Navbar