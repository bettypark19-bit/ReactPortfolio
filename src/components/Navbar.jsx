function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">S</div>
      <div className="navbar-links">
        <a className="navbar-link" href="#about">About me</a>
        <a className="navbar-link" href="#skills">Skills</a>
        <a className="navbar-link" href="#projects">Projects</a>
        <a className="navbar-link" href="#other-works">Works</a>
      </div>
      <button className="navbar-connect-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Connect!</button>
    </nav>
  );
}

export default Navbar;
