import React, { Component } from 'react';
import ConfigVarContext from './ConfigVarContext'

class ConfigVar extends Component {

  constructor(props) {
    super(props);
    this.state = {apiresponse : []}
  }

  async componentDidMount(){
      this.setState({isLoading: true });
      const response = await fetch(window.API_URL+'header');
      const data = await response.json();
      this.setState({apiresponse: data , isLoading: false});


         var cssis = "";
        Object.entries(data).forEach(([key, value]) =>{
            if(key.includes("_css")){
               cssis = cssis + value;
            }
          });

         const $style = document.createElement("style");
         document.head.appendChild($style);
          $style.innerHTML = `${cssis}`;
        }


     render() {
          return (
                <ConfigVarContext.Provider value={this.state.apiresponse} lang = {this.state.apiresponse['lang']}>
                   {this.props.children}
                </ConfigVarContext.Provider>
           );
     }
}

export default ConfigVar;




/*
function alertee(){
   const response =  fetch(window.API_URL+'header');
   const data = response.json();
   return data._header_;
}


 window.headerRespons = [];
export const getData = async () => {
        const response = await fetch(window.API_URL+'header');
                  //.then(response => response.json())
        const data = await response.json();

         window.headerRespons = await data;
    //return  data;
 }
//getData();

async componentDidMount(){
     const response = await fetch(window.API_URL+'header');
                     //.then(response => response.json())
       const data = await response.json();
     window.headerRespons = data;
}


export const _header1 =  (dataArray1) => {
   //Do something with the input
    //const data = await getData();
    return  window.headerRespons[dataArray1];
  //return theInput+"---" ;
};

export const _header2 =  (dataArray1, dataArray2) => {
   //Do something with the input
    //const data = await getData();
    return window.headerRespons[dataArray1][dataArray2] ;
  //return theInput+"---" ;
};

export const _l =  (theInput) => {
   //Do something with the input
    //const data = await getData();

    return theInput;
  //return theInput+"---" ;
};

export const justAnAlert = () => {
   alert('hello');
};
*/