import UserData from "./userData";
export default function Header() {
    console.log("Header");
    return (
        <div className = "bg-red-500 p-4 text-white text-center">
            <h1 className ="text-2xl font-bold mb-2 ">Header</h1>
            <p ClassName = "text-sm font-semibold bg-gray-800">Lorem ipsum dolor sit amet</p>
            
            <UserData/>
        </div>
    )
}