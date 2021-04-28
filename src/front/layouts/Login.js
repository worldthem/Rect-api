import React, { Component } from 'react';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "./../services/auth.service";
import {withRouter} from 'react-router-dom'
import Main from './../../Main';


class Login extends Main {

constructor(props) {
       super(props);
          this.onChangeEmail = this.onChangeEmail.bind(this);
          this.onChangePassword = this.onChangePassword.bind(this);
          this.handleLogin = this.handleLogin.bind(this);

          this.state = {
                   email: "",
                   password: "",
                   loading: false,
                   message: ""
          }

}

    onChangeEmail(e) {
     this.setState({
       email: e.target.value
     });
    }

   onChangePassword(e) {
     this.setState({
       password: e.target.value
     });
   }

    handleLogin(e) {
       e.preventDefault();

       this.setState({
         message: "",
         loading: true
       });

/*
const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.state.username, password: this.state.password, _token:'' })
    };
    fetch(window.API_URL+ "signin", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));


               this.setState({
                     loading: false,
                     message: "yep"
                   });
*/

        AuthService.login(this.state.email, this.state.password).then(
               () => {
                  //this.props.history.push("/profile");
                  //window.location.reload();
                  window.location.href = '/profile'
                  this.setState({
                         loading: false,
                         message: "success"
                    });
               },
               error => {
                 const resMessage =
                   (error.response &&
                     error.response.data &&
                     error.response.data.message) ||
                   error.message ||
                   error.toString();

                 this.setState({
                   loading: false,
                   message: resMessage
                 });
               }
             );


    }


 render() {
  return (
   <div>
         <form onSubmit={this.handleLogin}  ref={c => {  this.form = c;  }} >
             <input name="email" placeholder={this._l("Email")} type="email"
                     value={this.state.email} onChange={this.onChangeEmail} required="" />

             <input name="password" placeholder={this._l("Password")}  type="password"
                    value={this.state.password}  onChange={this.onChangePassword} required=""/>

             <div class="sign-up">
                  <button className="btn btn-primary btn-block" disabled={this.state.loading} >
                              {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span> {this._l("Login")}</span>
                   </button>
             </div>

              {this.state.message && (
                   <div className="form-group">
                     <div className="alert alert-danger" role="alert">
                       {this.state.message}
                     </div>
                   </div>
               )}

       </form>
   </div>
  );
 }
}

export default Login;