
export default function Header() {
  return (
    <nav>
      <a href="/" className="logo">Xplore
        <i className="fab fa-staylinked"></i>kill
      </a>
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times"></i>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="course">Course</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>
      <i className="fa fa-bars"></i>
    </nav>
  )
}