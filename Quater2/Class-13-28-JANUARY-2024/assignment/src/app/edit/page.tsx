"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux"
import { updateService, editService } from "../../../store/slices/serviceSlice"

export default function Edit() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();
  const dispatch = useDispatch();

  const id = localStorage.getItem('id')

  const service = useSelector((store: any) => store.serviceSlice.toUpdate) || dispatch(editService({ id: id }))
  useEffect(()=>
  {
    setTitle(service?.title)
    setDescription(service?.description)
  },[service?.title, service?.description])
  const onSubmitHandler = (id: any) => {
    setTitle(title);
    setDescription(description);
    dispatch(updateService({id: id, title: title, description: description}))
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-2 rounded-3xl"
      />

      <label className="block text-gray-600 text-sm mb-2" htmlFor="description">
        Description
      </label>

      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-2 rounded-xl"
      />

      <button
        onClick={() => onSubmitHandler(id)}
        className="flex items-center bg-transparent bg-blue-100 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-blue-800 hover:border-transparent rounded-full"
      >
        Update
      </button>
    </div>
  )
}
