import React from 'react'

export default function Button(props:any) {
  return (
    <button onClick={props.click} className="bg-transparent hover:bg-teal-800 text-teal-800 font-semibold hover:text-white py-2 px-4 border border-teal-800 hover:border-transparent rounded-full">
      {props.title}
    </button>
  )
}
