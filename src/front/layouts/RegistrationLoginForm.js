import React from 'react';
import Login from './Login';
import Registration from './Registration';
import Main from './../../Main';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class RegistrationLoginForm extends Main {

constructor(props) {
       super(props);

       this.setTab = this.setTab.bind(this);

       this.state = {rand1: Math.random().toString(36).substring(7),
                        rand2: Math.random().toString(36).substring(7),
                        rand3: Math.random().toString(36).substring(7),
                        randtab1: Math.random().toString(36).substring(7),
                        randtab2: Math.random().toString(36).substring(7),
                        flag: "tab1-1"
                      }
 }


setTab = (typeFlag) => {
   this.setState({
         flag: typeFlag
     });
 }


 render() {
  return (
   <div class="registrationBlock">
       <ul>
         <li class="resp-tab-item tab_buttons tab1-1 active"  onClick={() => this.setTab('tab1-1')} ><span>{this._l("Login")}</span></li>
         <li class="resp-tab-item tab_buttons tab2-2"  onClick={() => this.setTab('tab2-2')} ><span> {this._l("Registration")}</span></li>
      </ul>


      <div className={`tab-1 resp-tab-content tab-pane ${this.state.flag == "tab1-1"? "": "display_none"}`} id="tab1-1" aria-labelledby="tab_item-0" >
         <div class="facts">
            <div class="register">
                <Login/>
           </div>
         </div>
      </div>

          <div className={`tab-2 resp-tab-content tab-pane ${this.state.flag == "tab2-2"? "": "display_none"}`} id="tab2-2" aria-labelledby="tab_item-1">
             <div class="facts">
                <div class="register">
                   <Registration/>
                </div>
             </div>
          </div>

              <div className={`tab-3 resp-tab-content tab-pane ${this.state.flag == "tab3-3"? "": "display_none"}`} aria-labelledby="tab_item-2">
                 <div class="facts">
                    <div class="register">
                       <form action="${baseurl}reset-password" method="post" id="reset_pass${rand3}" class="reset_pass_${rand3}" onsubmit="simplePost('${baseurl}reset-password', '.show_result${rand3}', '', '#reset_pass${rand3}', '.show_result${rand3}' ); return false;">
                            <input name="email" placeholder={this._l('Email Address')} type="email" required="" />
                           <div class="sign-up">
                             <input type="submit" value={this._l('Reset password')} />
                           </div>

                           <p> <span class="show_result${rand3}" ></span></p>
                       </form>
                    </div>
                 </div>
              </div>


        <a href="#" class="tab3-3 tab_buttons reset_pass_btn" onClick ={() => this.setTab("tab3-3")} ><span> {this._l('Reset password')} </span></a>


   </div>
  );
 }
}

export default RegistrationLoginForm;