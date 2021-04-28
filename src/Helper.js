import { ConfigVarContext } from './front/context/ConfigVarContext';
import React from 'react';


export class Helper extends React.Component {

     static contextType = ConfigVarContext;
      //mainClass = "";
     constructor(){
              super();
             this.mainClass="";
        }

   _l = (data) => {
        return this.context[data];
    }

   static _header2 =  (dataArray1) => {
          return this.context[dataArray1];
     };


   render() {
      let value = this.context;
     return (
           <div></div>
        );

    }

}


export default Helper;