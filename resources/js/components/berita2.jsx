import React, { Component } from "react";
import Facebook from "./facebook";
import yanny from './yanny.jpg';

export class berita extends Component {
  render() {
    return (
      

//       // <div className="container">
//       <div id="berita" className="text-center">
//           <div className="col-md-8 col-md-offset-1  section-title">
//             <h2>Berita Terbaru</h2>

//             <div class="row justify-content-center">
//           <div className="col-md-4">
//             <h4>Judul Berita</h4>
//             <img src={yanny} />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem velit iusto optio minima quos accusantium ullam, magnam magni obcaecati harum quia atque voluptate porro deserunt quisquam nulla et laudantium.</p>
//           </div>

//           <div className="col-md-43">
//             <h4>Judul Berita</h4>
//             <img src={yanny} />
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
//           </div>


//           <div className="col-md-4">
//             <h4>Judul Berita</h4>
//             <img src={yanny} />
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
//           </div>
//           </div>
          
//           <div class="row justify-content-center">
//           <div className="col-md-4">
//             <h4>Judul Berita</h4>
//             <img src={yanny} />
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quia odio maiores. Dicta aperiam doloremque ducimus labore, a accusantium deserunt repellat quidem mollitia alias, eveniet ex nobis? Enim, aut natus?</p>
//           </div>
//           </div>
//           </div>
          


//           <div className="row">
//           <div className="col-xs-12 col-md-2 col-md-inset-1">
//             <h2>Widget</h2>
//           <Facebook/>
//             {/* <h3>Sidebar</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum vitae at velit, quaerat commodi quo eum laboriosam aperiam unde itaque quas exercitationem molestias nisi magni in sunt temporibus natus!
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates veritatis. Quia sequi aperiam necessitatibus eveniet, architecto illum possimus quam earum rerum obcaecati quis fugit cupiditate dolorem, et eaque odio.
//             </p> */}


//             {/* {this.props.data
//               ? this.props.data.map((d,i) => ( */}
//                   {/* <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3"> */}
//                     {/* {" "}
//                     <i className={d.icon}></i>
//                     <h3>{d.title}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 ))
//               : "Loading..."} */}
//           </div>
//         </div>
//       </div>
//       // </div>
//     );
//   }
// }

<div className="container">
<h2 className="my-4">Berita Terbaru</h2>
<div className="row">
    <div className="col-md-4 mb-5">
        <div className="card h-100">
            <a href="#">
                <img
                    className="card-img-top"
                    src="https://placehold.it/700x400"
                    alt=""
                />
            </a>
            <div className="card-body">
                <h4 className="card-title">
                    <a href="#">Judul Berita</a>
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">
                    03 Maret 2021
                </h6>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Sapiente esse
                    necessitatibus neque sequi doloribus.
                </p>
                <a href="#">Selengkapnya..</a>
            </div>
        </div>
    </div>
    <div className="col-md-4 mb-5">
        <div className="card h-100">
            <img
                className="card-img-top"
                src="https://placehold.it/700x400"
                alt=""
            />
            <div className="card-body">
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
            </div>
        </div>
    </div>
    <div className="col-md-4 mb-5">
        <div className="card h-100">
            <img
                className="card-img-top"
                src="https://placehold.it/700x400"
                alt=""
            />
            <div className="card-body">
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
            </div>
        </div>
    </div>
    <div className="col-md-4 mb-5">
        <div className="card h-100">
            <img
                className="card-img-top"
                src="https://placehold.it/700x400"
                alt=""
            />
            <div className="card-body">
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
            </div>
        </div>
    </div>
</div>
</div>
);
}
}


export default berita;
