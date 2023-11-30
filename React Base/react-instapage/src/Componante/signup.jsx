import React from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

 const navigate = useNavigate();
 
 const navigateto =()=>{
  navigate('/login')
 }



    return(
        <div className="">
          <div className=" bg-white  border-solid border-2  flex flex-col text-xl  text-center items-center justify-between gap-5 rounded-xl  w-100  p-10 ">
            
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg" alt="" width="200px" />
            
            <div className=" flex flex-col">
            
            <label className="text-start ">Name</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="email" placeholder="Enter Your Name" />
            
            <label className="text-start ">Email</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="email" placeholder="Enter Your Email" />
            
            <label className="text-start ">Password</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="password" placeholder="Enter Your Password" />
            </div>
            
            <div className=" flex flex-col">
            <label className="text-start"> Mobile number</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="number" placeholder="Enter Your Number" />
            </div>
    
            <button onClick={navigateto} className=" px-12 border-solid rounded-lg border-slate-700 border-2 text-white bg-blue-700  ">Sign up</button>
            <div className=" flex flex-row gap-2">           
            <h6>Already! have a account ?</h6>
            <a className=" text-blue-700 cursor-pointer "  onClick={navigateto}>Log In</a>
            </div>
          </div>
        </div>
    )
}

export default Signup