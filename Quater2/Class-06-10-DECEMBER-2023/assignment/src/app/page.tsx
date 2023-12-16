'use client'
import Image from 'next/image'
import React from 'react';
import { useState } from 'react';
import Button from './components/Button';

export default function Home() {
  const names = ["Junaid", "Ali", "Ahmad", "Usman", "Umair", "Ahsan"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <ul className='flex gap-8 my-3'>
        {names.map((name, index) => (
          <li
            key={index}
            style={{
              fontWeight: index === currentIndex ? 'bold' : 'normal',
              textDecoration: index === currentIndex ? 'underline' : 'none',
            }}
          >
            {name}
          </li>
        ))}
      </ul>


      <p>Current Name: <span className='font-bold'>{names[currentIndex]}</span></p>
      <div className='flex gap-8 my-3'>
        <Button click={handlePrevClick} title="Previous"/>
        <Button click={handleNextClick} title="Next"/>
      </div>


      <table className="w-2/5 leading-normal">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Index
            </th>
            <th className="px-5 py-6 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => {
            return (
              <React.Fragment key={index}>
                <tr className={`${index % 2 !== 0 ? "bg-gray-100" : ""} ${index === currentIndex ? "bg-teal-800 font-bold" : ""}`}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className={`${index === currentIndex ? "text-white" : "text-gray-900"}  whitespace-no-wrap`}>{index + 1}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className={`${index === currentIndex ? "text-white" : "text-gray-900"}  whitespace-no-wrap`}>{name}</p>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
