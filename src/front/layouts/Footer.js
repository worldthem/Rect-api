import React, { Component } from 'react';
import Main from './../../Main';

class Footer extends Main {

     render() {
       return (
        <div dangerouslySetInnerHTML={{__html: this._header('_footer_')}} />
       );
     }

}

export default Footer;