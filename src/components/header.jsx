import UserData from "./userData";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className = "bg-slate-400">
            <Link to = "/">Home Page </Link>
            <Link to = "/login">Login </Link>
            <Link to = "/signup">Signup </Link>
            <Link to = "/test">Test Page </Link>
           
        </div>
    )
}