import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = ()=>
{
    return(
        <div className="container-fluid px-0">
            <nav className="navbar mw-100 navbar-expand-lg navbar-dark ">
  <div className="container-fluid mw-100">
    <NavLink className="navbar-brand"  to="#">Anime</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
        <li className="nav-item  px-4">
          <NavLink className="nav-link active" aria-current="page" exact activeClassName="menuactive" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-4">
          <NavLink className="nav-link" activeClassName="menuactive" to="/anime">Anime</NavLink>
        </li>

        <li className="nav-item px-4">
          <NavLink className="nav-link" activeClassName="menuactive" to="/about">About</NavLink>
        </li>

        <li className="nav-item px-4">
          <NavLink className="nav-link" activeClassName="menuactive" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>

    );
}

export default Navbar;