import React, { Component } from "react";
import yasti from './yasti.jpeg';
import yanny from './yanny.jpg';
import sekda from './sekda.jpg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export class pejabat extends Component {
  render() {
    return (
      <div id="pejabat" className="text-center">
        {/* <div className="container">
            <h2>Bupati</h2>
            <img src={yasti} />  
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>

            <h2>Wakil Bupati</h2>
            <img src={yanny} />
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>
       
            <h2>Sekretaris Daerah</h2>
            <img src={sekda} />
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>
        </div> */}


      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h2>Bupati</h2>
            <img src={yasti} />  
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <h2>Wakil Bupati</h2>
            <img src={yanny} />
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <h2>Sekretaris Daerah</h2>
            <img src={sekda} />
            <ul>
              <li> Nama                  :  </li>
              <li> Tempat Tanggal Lahir  :  </li>
              <li> Jenis Kelamin         :  </li>
              <li> Agama                 :  </li>
              <li> Status                :  </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

export default pejabat;
