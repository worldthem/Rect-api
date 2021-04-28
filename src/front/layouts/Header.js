import React, { Component } from 'react';
import Main from './../../Main';

class Header extends Main {

  constructor(props) {
       super(props);
       this.state = {apiresponse : []}
  }


 render() {
    const fav = document.getElementById("favicon");
    fav.href = this._header("favicon");


   return (
     <div dangerouslySetInnerHTML={{__html:   this._header('_header_')}} />
   );
 }

}

export default Header;