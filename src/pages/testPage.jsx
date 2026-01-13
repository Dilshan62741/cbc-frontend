import { useState } from "react"

export default function TestPage(){

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(" ")
    return(
        <div className = "w-full h-screen bg-red-900 flex justify-center items-center flex-col">
            <div className = "w-[450px] h-[250px] bg-green-400 flex justify-center items-center  ">
            <button onClick = {() => setCount(count - 1)} className = "w-[70px] h-[50px] bg-blue-400 text-[20px] cursor-pointer">
                -
            </button>
                <span className="text-[20px] font-bold mx-[10px]">{count}</span>
            <button onClick = {() => setCount(count + 1)} className = "w-[70px] h-[50px] bg-blue-400 text-[20px] cursor-pointer">
                +

            </button>
            
            </div>
            <div className = "w-[450px] h-[250px] bg-green-400 flex justify-center items-center flex-col">
                <span className = "w-[70px] h-[50px] text-[20px] cursor-pointer">{status}</span>
            <div>
                
                <button onClick = {() => setStatus("Failed")} className = "w-[70px] h-[50px] bg-blue-400 text-[20px] cursor-pointer m-[10px]"> Failed</button>
                
                <button onClick = {() => setStatus("Passed")} className = "w-[70px] h-[50px] bg-blue-400 text-[20px] cursor-pointer m-[10px]"> Passed</button>
            </div>
            </div>
        </div>
    )
}