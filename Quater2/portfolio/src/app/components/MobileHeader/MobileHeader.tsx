import React from 'react'
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";


export default function MobileHeader() {
  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <Link className="logo" href="/">
            <h3 className="font-bold text-2xl">MJ</h3>
          </Link>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            <label htmlFor="check" className="close-menu">X</label>
          </span>

          <label htmlFor="check" className="open-menu"><FaBars /></label>
        </ul>
      </nav>
    </header>
  )
}
