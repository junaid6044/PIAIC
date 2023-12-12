'use client'

export default function Button(props:any) {
  return (
    <button onClick={props.click} className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full">
      Delete
    </button>
  )
}
