import React, { Component} from 'react';
import { FacebookProvider, Page,} from 'react-facebook';
 
export class facebook extends Component {
  render() {
    return (
      <FacebookProvider appId="1013050112553644">
        <Page href="https://www.facebook.com/GabutDeveloper" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}

export default facebook;