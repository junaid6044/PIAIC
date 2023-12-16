'use client'
import React from 'react';
import { useState } from "react"
import Button from "./components/Button"
import { studentsType } from "./types/types"

export default function Home() {
  const [students, setStudents] = useState<studentsType[]> ([
    {
      id: 1,
      name: 'arun',
      gender: 'Male',
      physics: 88,
      maths: 87,
      english: 78
    },
    {
      id: 2,
      name: 'rajesh',
      gender: 'Male',
      physics: 96,
      maths: 100,
      english: 95
    },
    {
      id: 3,
      name: 'moorthy',
      gender: 'Male',
      physics: 89,
      maths: 90,
      english: 70
    },
    {
      id: 4,
      name: 'raja',
      gender: 'Male',
      physics: 30,
      maths: 25,
      english: 40
    },
    {
      id: 5,
      name: 'usha',
      gender: 'Female',
      physics: 67,
      maths: 45,
      english: 78
    },
    {
      id: 6,
      name: 'priya',
      gender: 'Female',
      physics: 56,
      maths: 46,
      english: 78
    },
    {
      id: 7,
      name: 'Sundar',
      gender: 'Male',
      physics: 12,
      maths: 67,
      english: 67
    },
    {
      id: 8,
      name: 'Kavitha',
      gender: 'Female',
      physics: 78,
      maths: 71,
      english: 67
    },
    {
      id: 9,
      name: 'Dinesh',
      gender: 'Male',
      physics: 56,
      maths: 45,
      english: 67
    },
    {
      id: 10,
      name: 'Hema',
      gender: 'Female',
      physics: 71,
      maths: 90,
      english: 23
    },
    {
      id: 11,
      name: 'Gowri',
      gender: 'Female',
      physics: 100,
      maths: 100,
      english: 100
    },
    {
      id: 12,
      name: 'Ram',
      gender: 'Male',
      physics: 78,
      maths: 55,
      english: 47
    },
    {
      id: 13,
      name: 'Murugan',
      gender: 'Male',
      physics: 34,
      maths: 89,
      english: 78
    },
    {
      id: 14,
      name: 'Jenifer',
      gender: 'Female',
      physics: 67,
      maths: 88,
      english: 90
    }
  ])
  const onClickHandle = (userId:number) => {
    setStudents((students) => students.filter((user) => user.id !== userId))
  }
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Students Data</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-300">
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Roll No.
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Physics
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Maths
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    English
                  </th>
                  <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((user, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className={index % 2 !== 0 ? "bg-gray-100" : ""}>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.id}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.gender}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.physics}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.maths}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user.english}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <Button click={() => onClickHandle(user.id)} />
                        </td>
                      </tr>
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
