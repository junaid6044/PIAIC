'use client'
import { useRef } from "react";
import Link from 'next/link'

export default function Header() {
  const navLinksRef = useRef<HTMLDivElement>(null);

  function hideMenu() {
    const navLinks = navLinksRef.current;
    if (navLinks) {
      navLinks.style.right = "-200px";
    }
  }

  function showMenu() {
    const navLinks = navLinksRef.current;
    if (navLinks) {
      navLinks.style.right = "0";
    }
  }

  return (
    <nav>
      <Link href="/" className="logo">Xplore
        <i className="fab fa-staylinked"></i>kill
      </Link>
      <div className="nav-links" id="navLinks" ref={navLinksRef}>
        <i className="fa fa-times" onClick={hideMenu}></i>
        <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/course">Course</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  )
}