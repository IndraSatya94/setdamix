import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import nintau from './nintau.jpg';

class Berita extends Component {
    render() {
        return (
            <div id="berita" className="text-center">
            <h2 className="my-4">Berita Terbaru</h2>
            <MDBContainer>    
            <MDBRow>
              <MDBCol md="4"><img src={nintau} width='300px' height='300px'/>
                           
                                <h4 className="card-title">Judul Berita</h4>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    03 Maret 2021
                                </h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sapiente esse
                                    necessitatibus neque sequi doloribus.
                                </p>
                                <a href="#">Selengkapnya..</a>
                            </MDBCol>
              <MDBCol md="4"><img src={nintau} width='300px' height='300px'/>
                          
                                <h4 className="card-title">Judul Berita</h4>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    03 Maret 2021
                                </h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sapiente esse
                                    necessitatibus neque sequi doloribus.
                                </p>
                                <a href="#">Selengkapnya..</a>
                            </MDBCol>
              <MDBCol md="4"><img src={nintau} width='300px' height='300px'/>
                                <h4 className="card-title">Judul Berita</h4>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    03 Maret 2021
                                </h6>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Sapiente esse
                                    necessitatibus neque sequi doloribus.
                                </p>
                                <a href="#">Selengkapnya..</a>
                            </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">.col-md-4</MDBCol>
              <MDBCol md="4">.col-md-4</MDBCol>
              <MDBCol md="4">.col-md-4</MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
        );
    }
}

export default Berita;