"use client"
import { useState, useEffect } from "react"
import React from 'react';
import * as yup from "yup"
import Input from './components/Input'
import { userTypes } from './types/CommonTypes';
import DisplayContact from "./components/displayContact"


export default function Home() {
  const userInfoSchema = yup.object().shape({
    name: yup.string().required().min(5),
    email: yup.string().email().required(),
    phone: yup.number().required().integer(),
  })

  const [userInfo, setUserInfo] = useState<userTypes>({
    name: "",
    email: "",
    phone: 0
  })
  
  const [errors, setError ] = useState<string[]>([])
  const [userList, setUserList] = useState<userTypes[]>([])

  const onChangeHandler = (e:any) => {
    let userDetails = {
      ...userInfo,
      [e.target.name]: e.target.value
    }
    setUserInfo(userDetails)
  }

  const onClickHandler =  async (e:any) => {
    try {
      const result = await userInfoSchema.validate(userInfo)
      if (!result) {
        return 
      }
      
      setError([])
      let newContactList: userTypes[] = [...userList, userInfo];
      setUserList(newContactList);
      const response = await fetch('http://localhost:8000/create_user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
      });
      setUserInfo({
        name: "",
        email: "",
        phone: 0
      })
    }
    catch (err:any) {
      setError(err.errors)
    }
  }

  useEffect(() => {
    // Function to fetch user data from your localhost
    const fetchUserData = async () => {
      try {
        // Fetch users from your localhost
        const response = await fetch('http://localhost:8000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserList(data);
      } catch (error: any ) {
        console.error('Error fetching user data:', error.message);
      }
    };
  
    // Call the fetchUserData function
    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="text-black text-center m-6 text-xl z-200"> User Info </div>
        <div className="text-white m-6 z-200 text-center">
          <div className="">
            <Input attr={{
              inputType: "text",
              placeholder: "Name",
              name: "name",
              id: "name",
              value: userInfo.name,
              autoComplete: "name",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "email",
              placeholder: "E-mail",
              name: "email",
              id: "email",
              value: userInfo.email,
              autoComplete: "email",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "tel",
              placeholder: "Phone",
              name: "phone",
              id: "phone",
              value: userInfo.phone,
              autoComplete: "tel",
              required: true,
              fun: onChangeHandler
            }}/>
          </div>
          {/* {errors.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div style={{color:"red"}}>
                  <h1>{item}</h1>
                </div>
              </React.Fragment>
            )
          })} */}

          <div className="flex justify-end m-2">
            <button onClick={onClickHandler} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border border-teal-800 hover:border-transparent rounded-full">Submit</button>
          </div>
        </div>
        <DisplayContact contactData={userList} />
      </div>
    </div>
  )
}
