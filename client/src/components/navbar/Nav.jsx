import './nav.css';
const Nav = () => {
  return (
    <>
    <header className="header">
    <nav className="navbar">
    <h3 className="brand_name">mysterious world</h3>
    <figure className="brand_logo">
    <img src="" alt="" />
    </figure>
    <ul className="nav_items">
        <li className="nav_links"><a href="/home">home</a></li>
        <li className="nav_links"><a href="/services">services</a></li>
        <li className="nav_links"><a href="/about">about</a></li>
        <li className="nav_links"><a href="/contact">contact</a></li>
        <li className="nav_links"><a href="/more">more</a></li>      
    </ul>
    </nav>
    </header>
    </>
  )
}

export default Nav;