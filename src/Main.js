import React, { Component } from 'react';
import { ConfigVarContext } from './front/context/ConfigVarContext';


export class Main extends Component {

 static contextType = ConfigVarContext;

  constructor(props) {
       super(props);
 }

  _header =  (dataArray1) => {
      return this.context[dataArray1];
  };

  _l = (word) => {

    try{
       var lang = this.context['lang'][word.toLowerCase().trim()].trim();
       return lang != "" ? lang : word;
     }catch(e){
       return word; }
  }

/*
 render() {

   return (
     <div></div>
   );
 }
 */

}
export default Main;
