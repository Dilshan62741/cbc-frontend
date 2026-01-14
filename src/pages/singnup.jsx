import { useState } from "react";

export default function SignUpPage() {

    //make use states for email , firlst name, last name and password
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className = "w-screen h-screen bg-[url('registerPageBg.jpg')] bg-cover bg-center flex justify-center items-center">
          <div className="w-[1000px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col">
            <span>First Name :</span>
            <input onChange ={(e)=>{setFirstName(e.target.value)}} value={firstName} className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
            <input onChange ={(e)=>{setLastName(e.target.value)}} value={lastName} className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
            <input onChange ={(e)=>{setEmail(e.target.value)}} value={email} className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
            <input onChange ={(e)=>{setPassword(e.target.value)}} value={password} type = "password" className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
          </div>
        </div>
    );
}