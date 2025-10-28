import { useContext } from "react"
import { UserContext } from "../App"
import { Link, Outlet } from "react-router"
import Navbar from "./Navbar"

// Assignment: create Navbar.jsx for Navbar


function UserLayout() {
    const {user} = useContext(UserContext)
    return <>
        <Navbar/>
        <div>Hi, {user?.name}</div>
        <hr/>
        <Outlet/>
    </>
}

export default UserLayout
