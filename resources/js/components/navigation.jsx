import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export class Navigation extends Component {
  
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              SETDA Bolmong
            </a>{" "}
          </div>
          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">


              <li><NavLink to="/">Home</NavLink> </li>
              <li><NavLink to="/berita">Berita</NavLink> </li>
              <li><NavLink to="/pengumuman">Pengumuman</NavLink> </li>
              <li><NavLink to="/profilsetda">Profil Setda</NavLink> </li>
              <li><NavLink to="/pejabat">Pejabat</NavLink> </li>
              <li><NavLink to="contact-us">Contact Us</NavLink> </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDton" data-bs-toggle="dropdown" aria-expanded="falsropdownMenuLink"  role="bute">
                  Profil SETDA
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to="/profilsetda">Visi & Misi</NavLink> </li>
                <li><NavLink to="/pejabat">Pejabat</NavLink> </li>
                </ul>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
