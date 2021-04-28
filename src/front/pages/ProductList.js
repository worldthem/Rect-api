import React from 'react'
import ReactDOM from 'react-dom'


class ProductList extends React.Component{

  constructor(props) {
       super(props);
       this.state = {apiresponse : [], title: 'eeeeeee', metad: '', metak: '', isLoading: true}
 }

 async componentDidMount(){
      this.setState({isLoading: true });
      const response = await fetch(window.API_URL+'product-list');
      const data = await response.json();
      this.setState({apiresponse: data.content.content , isLoading: false});

               /*
         fetch('api/v1/product-list')
              .then(response => response.json())
              .then(data => this.setState({
                             apiresponse: data.data.content,
                             title: data.title,
                             isLoading: false}));
                             */


       document.title =data.title;

   }

  render(){
    return(
    <div>
       {
       this.state.apiresponse.map(

                row =>
                    <div>
                       {row.productid}
                    </div>
                )
       }
       </div>
    )
  }
}

export default ProductList;