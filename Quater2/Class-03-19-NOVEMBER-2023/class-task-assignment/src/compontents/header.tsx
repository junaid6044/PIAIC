import Link from 'next/link'

export default function Header() {
  // const navLinks = document.getElementById("navLinks")!;

  // const showMenu = () => {
  //   navLinks.style.right = "0";
  // };

  // const hideMenu = () => {
  //   navLinks.style.right = "-200px";
  // };

  return (
    <nav>
      <Link href="/" className="logo">Xplore
        <i className="fab fa-staylinked"></i>kill
      </Link>
      <div className="nav-links" id="navLinks">
        {/* <i className="fa fa-times" onClick={hideMenu}></i> */}
        <i className="fa fa-times"></i>
        <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/course">Course</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <i className="fa fa-bars"></i>
      {/* <i className="fa fa-bars" onClick={showMenu}></i> */}
    </nav>
  )
}