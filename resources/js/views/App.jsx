import React from 'react';
import './App.css';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Profilsetda from '../components/profilsetda';
import Berita from '../components/berita';
import Footer from '../components/footer';
import Pengumuman from '../components/pengumuman';
import Pejabat from '../components/pejabat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Gallery from '../components/gallery';



function App() {
  return (

    <Router>
    <div className="App">
      <Navigation/>

      <Route path="/" exact component={Header}/>
      <Route path="/profilsetda"component={Profilsetda}/>
      <Route path="/pejabat"component={Pejabat}/>
      <Route path="/berita"component={Berita}/>
      <Route path="/pengumuman"component={Pengumuman}/>
      <Route path="/gallery"component={Gallery}/>

      <Footer/>
      

    </div>
    </Router>

  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
