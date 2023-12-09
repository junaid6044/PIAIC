import Link from "next/link";
import Image from "next/image";
import React from 'react'
import '../styles/Login.css'


export default function login() {
  return (
    <div className="h-screen bg-ivory" data-testid="sign-in-card">
      <main className="h-full flex flex-col items-center justify-center">
        <section className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-2">
          <Link href="/" className="flex justify-center">
            <Image
              src={"/logo-white.svg"}
              alt="Quivr Logo"
              width={64}
              height={64}
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <p className="text-center text-4xl font-medium">
            Talk to
            <span className="text-primary"> Quivr</span>
          </p>
          <div className="flex justify-center">
            <div className="h-[90%] w-full md:w-3/4 m-4">
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4">
                <div className="w-full">
                  <input type="text" placeholder="Email address"
                    className="w-full bg-gray-50 dark:bg-gray-900 px-4 border rounded-md border-black/10 dark:border-white/25 py-1 mt-1 mb-3" />
                </div>
                <div className="w-full">
                  <input type="password" placeholder="Password"
                    className=" w-full bg-gray-50 dark:bg-gray-900 px-4 border rounded-md border-black/10 dark:border-white/25 py-1 mt-1 mb-3" />
                </div>
              </div>
              <div className="text-center">
                <button
                  className="log_in_btn px-8 py-2 rounded-md text-sm text-white w-full">Continue with email</button>
              </div>
              <div className="flex items-center justify-center my-3 uppercase">
                <hr className="border-t border-gray-300 w-12" />
                <p className="px-3 text-center text-gray-500 dark:text-white">or</p>
                <hr className="border-t border-gray-300 w-12" />
              </div>
              <div className="text-center flex flex-col">
              <Link href="/" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                Not a User? Create New Account
              </Link>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-center">Unpaid users have access to a free and limited demo of Quivr</p>
        </section>
      </main>
    </div>
  )
}
