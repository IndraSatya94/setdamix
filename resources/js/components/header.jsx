import React, { Component } from "react";
import Berita from './berita';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {/* {this.props.data ? this.props.data.title : "Loading"} */}
                    BOLAANG MONGONDOW
                    <span></span>
                  </h1>
                  <p>
                    {/* {this.props.data ? this.props.data.paragraph : "Loading"} */}
                    Selamat Datang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="head">- Berita Terbaru -</div>
        <Berita/>
      </header>
    );
  }
}

export default Header;
