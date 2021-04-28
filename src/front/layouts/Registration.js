import React, { Component } from 'react';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "./../services/auth.service";
import {withRouter} from 'react-router-dom'
import Main from './../../Main';


class Registration extends Main {

constructor(props) {
       super(props);
          this.onChangeEmail = this.onChangeEmail.bind(this);
          this.onChangePassword = this.onChangePassword.bind(this);

          this.onChangeFirstName = this.onChangeFirstName.bind(this);
          this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
          this.onChangeAbout = this.onChangeAbout.bind(this);

          this.handleReg = this.handleReg.bind(this);

          this.state = {
                   email: "",
                   password: "",
                   loading: false,
                   firstName: "",
                   dateOfBirth: "",
                   profesion: "",
                   //message: "",
                   about: "",
                   message: "",
                   //profileimage:null,
                   idimage:null
          }

}

   onChangeFirstName(e) {
      this.setState({
        firstName: e.target.value
      });
     }

    onChangeDateOfBirth(e) {
       this.setState({
         dateOfBirth: e.target.value
       });
      }

   onChangeAbout(e) {
       this.setState({
         about: e.target.value
       });
      }


   onReligion(e){
      this.setState({
        religion: e.target.value
      });
   }

    onGender(e){
      this.setState({
        gender: e.target.value
      });
   }

   onMarriedStatus(e){
      this.setState({
        marriedStatus: e.target.value
      });
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

  onSexsuality(e) {
     this.setState({
       sexsuality: e.target.value
     });
   }

    /*
    onProfileimage(e) {
        let img = e.target.files[0];
        this.setState({
          profileimage: URL.createObjectURL(img)
        });
      }
      */

     onImageIdentification(e) {
        let img = e.target.files[0];
        this.setState({
          idimage: URL.createObjectURL(img)
        });
      }

    handleReg(e) {
       e.preventDefault();

       this.setState({
         message: "",
         loading: true
       });



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
         <form onSubmit={this.handleReg}  ref={c => {  this.form = c;  }} >

              <input name="firstName" placeholder={this._l("Name")} type="text"
                                  value={this.state.firstName} onChange={this.onChangeFirstName} required="" />


              <input name="dateOfBirth" placeholder={this._l("DOB")} type="text"
                                  value={this.state.dateOfBirth} onChange={this.onChangeDateOfBirth} required="" />


              <input name="profesion" placeholder={this._l("Profession")} type="text"
                                                value={this.state.profesion} onChange={this.onChangeProfesion} required="" />

              <select name="address">
                <option value="">{this._l("Living in")}</option>
              </select>

               <select name="religion" onChange={this.onReligion}>
                  <option value="">{this._l("I am")}</option>
                  <option value="Muslim">{this._l("Muslim")}</option>
                  <option value="Hindu">{this._l("Hindu")}</option>
                  <option value="Buddhist">{this._l("Buddhist")}</option>
                  <option value="Christian">{this._l("Christian")}</option>
                  <option value="Non-Believer">{this._l("Non-Believer")}</option>
                  <option value="other">{this._l("Other")}</option>
                </select>


                <select name="gender" onChange={this.onGender}>
                    <option value="">{this._l("I am")}</option>
                    <option value="Male">{this._l("Male")}</option>
                    <option value="Female">{this._l("Female")}</option>
                    <option value="Transgender/Third Gender Male">{this._l("Transgender/Third Gender Male")}</option>
                    <option value="Transgender/Third Gender Female">{this._l("Transgender/Third Gender Female")}</option>
                    <option value="other">{this._l("Other")}</option>
                 </select>

                 <select name="marriedStatus" onChange={this.onMarriedStatus}>
                     <option value="">{this._l("I am")}</option>
                     <option value="Single">{this._l("Single")}</option>
                     <option value="Married">{this._l("Married")}</option>
                     <option value="Divorced">{this._l("Divorced")}</option>
                     <option value="Separated">{this._l("Separated")}</option>
                     <option value="Widow">{this._l("Widow")}</option>
                     <option value="other">{this._l("Other")}</option>
                 </select>

                 <select name="sexsuality" onChange={this.onSexsuality}>
                     <option value="">{this._l("I am")}</option>
                     <option value="Straight">{this._l("Straight")}</option>
                     <option value="Homo Sexual">{this._l("Homo Sexual")}</option>
                     <option value="Bisexual">{this._l("Bisexual")}</option>
                     <option value="other">{this._l("Other")}</option>
                 </select>


                 <div class="clear_10px"></div>

                 <textarea name="about" placeholder={this._l("About Myself")} onChange={this.onChangeAbout}>{this.state.about}</textarea>

                 <label>{this._l("Identification Pics")}</label> <br/>
                 <input type="file" accept="image/*" capture="camera" name="imageIdentification" onChange={this.onImageIdentification}/>
                 <div class="clear_10px"></div>

                 <input name="email" placeholder={this._l("Email")} type="email"
                         value={this.state.email} onChange={this.onChangeEmail} required="" />

                 <input name="password" placeholder={this._l("Password")}  type="password"
                        value={this.state.password}  onChange={this.onChangePassword} required="" />

                 <label>
                   <input type="checkbox" value="yes" required="yes" /> T&Cs
                 </label>

                 <div class="sign-up">
                      <button className="btn btn-primary btn-block" disabled={this.state.loading} >
                              {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span> {this._l("Registration")}</span>
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

export default Registration;