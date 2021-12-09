import React from 'react'

function Header() {
    return (
        <div>
            <header>
      <div className="navmenu">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
          alt="logo-css"
          className="logo-css"
        />
        <ul className="nav-links">
          <li>
            <a href="#" id="home" className="text"> Home</a>
          </li>
          <li>
            <a href="#" className="text"> About</a>
          </li>
          <li>
            <a href="#" className="text"> Projects</a>
          </li>
          <li>
            <div className="dropdown">
              <a className="dropbtn text">Dropdown</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
        </div>
    )
}

export default Header

