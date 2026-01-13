import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className = "w-full h-screen flex" >
            <div className = "h-full w-[300px] bg-green-400 flex flex-col">
                <Link to = "/admin/products">products</Link>
                <Link to = "/admin/orders">Orders</Link>
                <Link to = "/admin/users">Users</Link>
            </div>
        
        <div className ="h-full w-[calc(100%-300px)] bg-red-400" >
            <Routes path = "/* ">
            <Route path = "/products" element = {<h1>Products</h1>}/>
            <Route path = "/orders" element = {<h1>Orders</h1>}/>
            <Route path = "/users" element = {<h1>Users</h1>}/>

            
        </Routes>
        </div>
        
        </div>
    );
}