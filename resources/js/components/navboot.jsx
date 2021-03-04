import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export class navboot extends Component {
  
  render() {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
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
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
            <li><NavLink to="/">Home</NavLink> </li>
              <li><NavLink to="/berita">Berita</NavLink> </li>
              <li><NavLink to="/pengumuman">Pengumuman</NavLink> </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/berita">Berita</NavLink> </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default navboot;