"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux"
import { createService } from "../../../store/slices/serviceSlice"

export default function New() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();
  const services = useSelector((store: any) => store.serviceSlice.services)

  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    setTitle(title);
    setDescription(description);
    dispatch(createService({ id: (services.length + 1), title: title, description: description }))
    router.push('/');
  }

  return (
    <div className="w-3/4 mt-8 mx-auto">

      <label className="block text-gray-600 text-sm mb-2" htmlFor="title">
        Title
      </label>

      <input
        type="text"
        id="title"
        // value="test title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-2 rounded-3xl"
      />

      <label className="block text-gray-600 text-sm mb-2" htmlFor="description">
        Description
      </label>

      <textarea
        id="description"
        // value="test description"
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-2 rounded-xl"
      />

      <button
        onClick={onSubmitHandler}
        className="flex items-center bg-transparent bg-blue-100 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-blue-800 hover:border-transparent rounded-full"
      >
        Save
      </button>
    </div>
  )
}
