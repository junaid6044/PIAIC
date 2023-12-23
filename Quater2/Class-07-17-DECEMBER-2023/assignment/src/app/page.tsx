"use client"
import { useState } from "react"
import React from 'react';
import * as yup from "yup"
import Input from './components/Input'
import { contactTypes } from './types/CommonTypes';
import DisplayContact from "./components/displayContact"

export default function Home() {

  const contactInfoSchema = yup.object().shape({
    firstName: yup.string().required().min(5).max(10),
    lastName: yup.string().required().min(5).max(10),
    fatherName: yup.string().required().min(5).max(10),
    education: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required().min(11).integer(),
    age: yup.number().required().min(18).max(30).positive().integer(),
    cnic: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    message: yup.string().required(),
    createdOn: yup.date().default(() => new Date()),
  })

  const [contactInfo, setContactInfo] = useState<contactTypes>({
    firstName: "",
    lastName: "",
    fatherName: "",
    education: "",
    email: "",
    phone: 0,
    age: 0,
    cnic: "",
    country: "",
    address: "",
    message: "",
    createdOn: new Date()
  })

  const [errors, setError ] = useState<string[]>([])
  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e:any) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }

  const onClickHandler =  async (e:any) => {
    try {
      const result = await contactInfoSchema.validate(contactInfo)
      if (!result) {
        return 
      }
      
      setError([])
      let newContactList: contactTypes[] = [...contactList, contactInfo];
      setContactList(newContactList);
      setContactInfo({
        firstName: "",
        lastName: "",
        fatherName: "",
        education: "",
        email: "",
        phone: 0,
        age: 0,
        cnic: "",
        country: "",
        address: "",
        message: "",
        createdOn: new Date()
      })
    }
    catch (err:any) {
      setError(err.errors)
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="text-black text-center m-6 text-xl z-200"> User Info </div>
        <div className="text-white m-6 z-200 text-center">
          <div className="">
            <Input attr={{
              inputType: "text",
              placeholder: "First Name",
              name: "firstName",
              id: "firstName",
              value: contactInfo.firstName,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "Last Name",
              name: "lastName",
              id: "lastName",
              value: contactInfo.lastName,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "Father Name",
              name: "fatherName",
              id: "fatherName",
              value: contactInfo.fatherName,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "Education",
              name: "education",
              id: "education",
              value: contactInfo.education,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "email",
              placeholder: "E-mail",
              name: "email",
              id: "email",
              value: contactInfo.email,
              autoComplete: "email",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "number",
              placeholder: "age",
              name: "age",
              id: "age",
              value: contactInfo.age,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "tel",
              placeholder: "Phone",
              name: "phone",
              id: "phone",
              value: contactInfo.phone,
              autoComplete: "tel",
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "CNIC",
              name: "cnic",
              id: "cnic",
              value: contactInfo.cnic,
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "Country",
              name: "country",
              id: "country",
              value: contactInfo.country,
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "text",
              placeholder: "Address",
              name: "address",
              id: "address",
              value: contactInfo.address,
              required: true,
              fun: onChangeHandler
            }}/>
            <Input attr={{
              inputType: "textarea",
              placeholder: "Type your message",
              name: "message",
              id: "message",
              value: contactInfo.message,
              required: true,
              fun: onChangeHandler
            }}/>
          </div>
          {errors.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div style={{color:"red"}}>
                  <h1>{item}</h1>
                </div>
              </React.Fragment>
            )
          })}

          <div className="flex justify-end m-2">
            <button onClick={onClickHandler} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border border-teal-800 hover:border-transparent rounded-full">Submit</button>
          </div>
        </div>
        <DisplayContact contactData={contactList} />
      </div>
    </div>
  )
}
