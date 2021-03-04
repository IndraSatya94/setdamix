import React, { Component } from 'react'

export class pengumuman extends Component {
  render() {
    return (
        <div id="pengumuman">
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-md-8"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div> //syntac ini dipindah dibawah*/}
            <div className="col-xs-12 col-md-8">
              <div className="pengumuman-text">
                <h2>Pengumuman</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, aut rem, accusantium quas eum nihil cum laborum, id eius dolorem dicta odio maxime laboriosam ipsum vero rerum fugiat quam ullam.
              </div>
            </div>
            <div className="col-xs-12 col-md-4"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default pengumuman
