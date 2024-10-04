"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    phoneNumber : "",
    password : "",
    country : "egypt",
  });

  const [error, setError] = useState({
    firstName : false,
    lastName : false,
  });

  const [buttonEnabled, setButtonEnabled] = useState(false);

  const [registerError, setRegisterError] = useState(false);


  useEffect(() => {
    if(validateAllFieldsAreChosen()) {
      if(error.firstName === false && error.lastName === false) {
        setButtonEnabled(() => true);
      }
      else {
        setButtonEnabled(() => false);
      }
    }
    else {
      setButtonEnabled(() => false);
    }
  }, [formData]);

  const validateAllFieldsAreChosen = () => {
    for (let key in formData) {
      if (!formData[key]) {
        return false;
      }
    }
    return true;
  };

  const validateName = (key, value) => {
    let regex = /^[a-zA-Z]+$/;

    if (value && !regex.test(value)) {
      setError((prevError) => ({...prevError,  [key]: true,}));
    } 
    else {
      setError((prevError) => ({ ...prevError, [key]: false,}));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevForm) => ({...prevForm, [name]: value,}));

    if(name === "firstName" || name === "lastName") {
      validateName(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!buttonEnabled) {
      return;
    }
    
    try {
      console.log(formData);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_NAME}/api/onBoarding/register`,
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
        setRegisterError(() => true);
        throw new Error("Failed to register");
      }

      window.location.href = "/auth/signin";
    } catch (error) {
      console.error("Error During Signup:", error);
    }
  };

  const submitButtonClass = 
    `${buttonEnabled ? "text-white bg-emerald-500 cursor-pointer " : "bg-neutral-300 text-neutral-700 cursor-not-allowed "} 
    font-bold rounded-full p-2 w-36 mb-3 transition-[background-color]`;
  return (
    <div className="flex flex-col h-full bg-white min-[900px]:flex-row min-[900px]:h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6 w-full h-fit min-[900px]:w-1/2 min-[900px]:h-full">
        <h1 className="font-bold text-2xl text-gray-700 mt-4">Sign Up</h1>
        <TextField id="outlined" label="First Name" name="firstName" error={error.firstName ? true : false} onChange={handleChange}/>
        <TextField id="outlined" label="Last Name" name="lastName" error={error.lastName ? true : false} onChange={handleChange} />
        <TextField id="outlined" label="Phone Number" type="number" name="phoneNumber" onChange={handleChange} />
        <TextField id="outlined" label="Password" type="password" name="password" onChange={handleChange} />
        <p 
        className="text-gray-700 font-semibold">
          Already Have An Account?
          <span onClick={() => window.location.href = "/auth/signin"} className="text-blue-600 hover:cursor-pointer"> Sign In</span></p>
        <button className={submitButtonClass}>Sign Up</button>
        {registerError && (
          <p className="font-semibold text-red-700 mt-4 mb-2">
            This Phone Number Is Already Registered!
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

export default SignUp;