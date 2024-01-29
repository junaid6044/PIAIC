"use client"
import { useSelector } from "react-redux"


export default function Home() {
  const services = useSelector((store: any) => store.serviceSlice.services)
  return (
    <div>
      <h1>List of services</h1>
      {services?.map((service: any, i: any) => {
        return <div key={i}>{service.title}</div>
      })}

    </div>
  );
}
