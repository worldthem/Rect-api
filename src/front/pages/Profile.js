import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import axios from "axios";
import authHeader from '../services/auth-header';

class Profile extends Component {


constructor(props) {
    super(props);
    //alert(AuthService.getCurrentUser());
    this.state = {apiresponse : [], text: '', title: '',  isLoading: true}
}

async componentDidMount(){
  const user = JSON.parse(localStorage.getItem('user'));
alert(user.accessToken);
       const response = await axios.get(window.API_URL + 'in/profile', { headers: authHeader() })
                                   .then(response => { return response.data;  });

       this.setState({text: response.text , isLoading: false});
       //alert(response.title);

}


 render() {

  return (
   <div>
         <div dangerouslySetInnerHTML={{__html: this.state.text}} />
   </div>
  );
 }
}

export default Profile;