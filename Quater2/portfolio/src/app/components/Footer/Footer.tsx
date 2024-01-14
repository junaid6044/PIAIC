import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
      <div className="container">
        <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
          © 2024 All Rights Reserved by&nbsp;
          <Link className="hover:text-[#FA5252] duration-300 transition" href="/" target="_blank" rel="noopener noreferrer">
            Muhammad Junaid
          </Link>
        </p>
      </div>
    </footer>
  )
}
