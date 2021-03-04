import React from 'react';
import './App.css';
import Header from './header';
import Navigation from './navigation';
import Profilsetda from './profilsetda';
import Berita from './berita';
import Footer from './footer';
import Pengumuman from './pengumuman';
import Pejabat from './pejabat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';



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

      <Footer/>
      

    </div>
    </Router>

  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
