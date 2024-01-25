import React from 'react'
import client from '../config/contentful'
import Card from '../components/card';

const fetchServices = async () => {
  let apiResp = await client.getEntries({ content_type: "blogs" })
  // console.log("fetchServices", apiResp.items[0].fields.image.fields.file.url);
  return apiResp.items;
}

export default async function blog() {
  const services = await fetchServices()
  return (
    <>
      <div className='text-center font-bold my-4'>
        <p className='text-red-800 text-lg'>My Recent Posts</p>
        <h1 className='text-6xl mt-2 mb-8 text-teal-600'>My Blog</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto">
        {services.map((service: any, i: any) => (
          <Card key={i} data={service} />
        ))}
      </div>
    </>
  )
}
