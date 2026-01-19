import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(){
        //console.log(email,password);
        try{
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/loginUser",{
            email:email,
            password:password
            })
          toast.success("Login Successfull");
          console.log(response.data)
          localStorage.setItem("token",response.data.token);

          if(response.data.role == "admin"){
            navigate("/admin");
          }else if(response.data.role == "customer"){
            navigate("/customer");
            
          }else{
            navigate("/");
          }
          

        }catch(e){
           toast.error(e.response.data.message);
        }
        
    }
    return(
        <div className = "w-screen h-screen bg-[url('loginBg.jpg')] bg-cover bg-center flex ">
          <div className="w-[50%] h-full"></div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className=" w-[500px] h-[400px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <input onChange ={(e)=>{setEmail(e.target.value)}} value={email} className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
                <input onChange ={(e)=>{setPassword(e.target.value)}} value={password} type = "password" className = "w-[400px] h-[50px] m-[10px] rounded-[10px] border-2 border-slate-400"/>
                <button onClick = {handleLogin} className="text-white bg-blue-400 w-[400px] h-[50px] rounded-[10px] border-2 border-slate-400 cursor-pointer">Login</button>
            <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
    )
}