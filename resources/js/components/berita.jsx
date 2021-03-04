import React, { Component } from "react";
import Facebook from "./facebook";
import yanny from './yanny.jpg';

export class berita extends Component {
  render() {
    return (
      <div className="container">
      <div id="berita" className="text-center">
          <div className="col-md-8 col-md-offset-1 section-title">
            <h2>Berita Terbaru</h2>

          <div class="row">
          <div className="col-6 col-sm-6">
            <h4>Judul Berita</h4>
            <img src={yanny} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem velit iusto optio minima quos accusantium ullam, magnam magni obcaecati harum quia atque voluptate porro deserunt quisquam nulla et laudantium.</p>
          </div>

          <div className="col-6 col-sm-6">
            <h4>Judul Berita</h4>
            <img src={yanny} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
          </div>

          <div class="w-100"></div>

          <div className="col-6 col-sm-6">
            <h4>Judul Berita</h4>
            <img src={yanny} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
          </div>

          <div className="col-6 col-sm-6">
            <h4>Judul Berita</h4>
            <img src={yanny} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
          </div>
          </div>
          </div>


          <div className="row">
          <div className="col-xs-12 col-md-3">
          <Facebook/>
            {/* <h3>Sidebar</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum vitae at velit, quaerat commodi quo eum laboriosam aperiam unde itaque quas exercitationem molestias nisi magni in sunt temporibus natus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates veritatis. Quia sequi aperiam necessitatibus eveniet, architecto illum possimus quam earum rerum obcaecati quis fugit cupiditate dolorem, et eaque odio.
            </p> */}


            {/* {this.props.data
              ? this.props.data.map((d,i) => ( */}
                  {/* <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3"> */}
                    {/* {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default berita;
