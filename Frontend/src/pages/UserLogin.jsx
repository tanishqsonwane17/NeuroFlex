import axios from "axios";
import React, { useState } from "react";

const UserLogin = () => {
 
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const submitHandler = async (e) =>{
  e.preventDefault()
 const response  =  await axios.post('http://localhost:3000/api/users/login',{
  email,
  password
 })
 console.log(response.data)
  
 }

  return (
    <form
    onSubmit={submitHandler}
      className="h-screen w-full bg-[#2d2d2d] flex justify-center items-center">
      <div className="h-100 w-120 rounded-xl bg-[#393939]">
        <div className="h-full">
          <h1 className="text-center font-bold font-mono mt-4 underline text-3xl text-white">
            Login
          </h1>

          <div className="px-20 h-70 w-full flex justify-center items-center flex-col gap-5">
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
              className="w-full text-white border-[#8e8e8e] rounded-lg  px-3 py-2 border"
            />
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="password"
              className="w-full text-white border-[#8e8e8e] rounded-lg px-3 py-2 border"
            />
            <button
              type="submit"
              className="w-full rounded-lg px-3 py-2 border bg-black text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserLogin;
