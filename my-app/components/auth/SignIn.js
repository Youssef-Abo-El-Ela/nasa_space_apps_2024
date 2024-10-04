"use client";

import { useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";

function SignIn() {
  const [formData, setFormData] = useState({
    phoneNumber : "",
    password : "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevForm) => ({...prevForm, [name]: value,}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_NAME}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({formData}),
          mode: "cors",
        }
      );

      if (!response.ok) {
        setLoginError(() => true);
        throw new Error("Failed to login");
      }

      window.location.href = "/home";

    } catch (error) {
      console.error("Error During Signin:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white min-[900px]:flex-row min-[900px]:h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6 w-full h-fit min-[900px]:w-1/2 min-[900px]:h-full">
        <h1 className="font-bold text-2xl text-gray-700 mt-4">Sign In</h1>
        <TextField id="outlined" label="Phone Number" type="number" name="phoneNumber" onChange={handleChange} />
        <TextField id="outlined" label="Password" type="password" name="password" onChange={handleChange} />
        <p
        className="text-gray-700 font-semibold">Don't Have An Account? 
        <span onClick={() => window.location.href = "/auth/signup"} className="text-blue-600 hover:cursor-pointer"> Sign Up</span></p>
        <button className="text-white bg-emerald-500 cursor-pointer font-bold rounded-full p-2 w-36 mb-3">Sign In</button>
        {loginError && (
          <p className="font-semibold text-red-700 mt-4 mb-2">
            This Phone Number Doesn't Exist!
          </p>
        )}
      </form>
      <div className="relative w-full h-96 min-[900px]:w-1/2 min-[900px]:h-full">
        <Image 
        src="/images/farming_picture.jpg"
        alt="Background Image"
        fill
        />
      </div>
    </div>
  );
}

export default SignIn;