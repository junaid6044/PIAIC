"use client"
import { useState } from "react"
import Input from './components/Input'
import { contactTypes } from './types/CommonTypes';
import DisplayContact from "./components/displayContact"

export default function Home() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: null,
    message: ""
  })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e:any) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }

  const onClickHandler = (e:any) => {
    let newContactList: contactTypes[] = [...contactList, contactInfo];
    setContactList(newContactList);
    setContactInfo({
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      message: contactInfo.message
    })
  }
  // const isContactInfoEmpty = Object.values(contactInfo).every(value => value === null || value === "");
  return (
    <div className="flex justify-center items-center">
      <div className="w-2/4">
        <div className="text-black text-center m-6 text-xl z-200"> Contact Us </div>
        <div className="text-white m-6 z-200">
          <div className="flex mb-4 m-2">
            <Input attr={{
              inputType: "text",
              placeholder: "Name",
              name: "name",
              id: "name",
              value: contactInfo.name,
              autoComplete: "off",
              required: true,
              fun: onChangeHandler
            }}/>
          </div>
          <div className="flex mb-4 m-2">
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
          </div>
          <div className="flex mb-4 m-2">
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
          </div>
          <div className="flex mb-4 m-2">
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

          <div className="flex justify-end m-2">
            <button onClick={onClickHandler} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border border-teal-800 hover:border-transparent rounded-full">Submit</button>
          </div>
        </div>
        {/* {!isContactInfoEmpty && <DisplayContact contactData={contactList} />} */}
        <DisplayContact contactData={contactList} />
      </div>
    </div>
  )
}
