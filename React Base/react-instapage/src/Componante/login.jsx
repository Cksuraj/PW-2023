import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  
  const navigate = useNavigate();   //Using React hook for Navigate through pages
  
   const naviageto =()=>{           // function for navigate
    navigate('/signup');
   }

    return (
        <div >
          <div className=" bg-white border-solid flex flex-col text-xl  text-center items-center justify-between gap-5 rounded-xl p-10  ">
            
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg" alt="" height="100px" width="200px" />
            
            <div className=" flex flex-col">
            <label className="text-start ">Username</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="email" placeholder="Enter Your Email" />
            </div>
            
            <div className=" flex flex-col">
            <label className="text-start"> Password</label>
            <input className="min-w-0 border-2 border-black p-1 rounded-md" type="password" placeholder="Enter Your Password" />
            </div>
            
            <button className=" px-12 border-solid rounded-lg border-slate-700 border-2 text-white bg-blue-700 " onClick={naviageto}>
               Login </button>
            <div className=" flex flex-row gap-2">           
            <h6>Don't have a account ?</h6>
            <a className=" text-blue-700 cursor-pointer" onClick={naviageto} > Sign up</a>
            </div>
          </div>
        </div>
    )
}

export default Login