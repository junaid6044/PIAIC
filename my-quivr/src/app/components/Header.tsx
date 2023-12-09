import Image from "next/image";
import { HomeHeaderBackground } from "./HomeHeaderBackground";
import Link from "next/link";


export default function Header() {
  return (
    <>
      <HomeHeaderBackground />
      <div className="flex justify-center pt-10">
        <nav className="self-center w-full max-w-7xl text-white">
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <Link href={"/"} className="text-3xl flex gap-2 items-center text-white hover:text-white">
              <Image
                src={"/logo-white.svg"}
                alt="Quivr Logo"
                width={64}
                height={64}
              />
              <span>Quivr</span>
            </Link>
            <ul className="hidden lg:flex items-center text-[15px] font-semibold pl-32">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/">Blog</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/login" className="flex gap-1 items-center">Sign up  
                  <Image
                    src={"/chevron-right.svg"}
                    alt="Sign up"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/login" className="flex gap-1 items-center">Sign in  
                  <Image
                    src={"/chevron-right.svg"}
                    alt="Sign in"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
