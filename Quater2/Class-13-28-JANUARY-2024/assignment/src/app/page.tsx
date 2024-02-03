"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux"
import { deleteService } from "../../store/slices/serviceSlice"
import Link from 'next/link';


export default function Home() {
  const router = useRouter();
  const services = useSelector((store: any) => store.serviceSlice.services)
  const dispatch = useDispatch()

  const onDeleteHandler = (id: any) => {
    dispatch(deleteService({ id: id }))
  }

  const onEditHandler = (id: any) => {
    router.push(`/edit?id=${id}`);
  }
  return (
    <div>

      <div className="flex items-center justify-end">
        <Link href="/new"
          className="w-auto flex items-center mr-2 bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-teal-800 hover:border-transparent rounded-full"
        >
          Create New Service
        </Link>
      </div>
      <table className="leading-normal w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Index
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {services?.map((service: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <tr className={`${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className={`"text-gray-900"}  whitespace-no-wrap`}>{index + 1}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className={`"text-gray-900"}  whitespace-no-wrap`}>{service.title}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className={`"text-gray-900"}  whitespace-no-wrap`}>{service.description}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <button
                      onClick={() => onEditHandler(service.id)}
                      className="flex items-center mr-2 bg-transparent bg-blue-100 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-blue-800 hover:border-transparent rounded-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteHandler(service.id)}
                      className="flex items-center bg-transparent bg-red-100 hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-red-800 hover:border-transparent rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}
