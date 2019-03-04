import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  ClickFunction(event) { 

    // if (Username==abc@abc.com&&Password==abc) {
    //   console.log("Good to go");
      
    // } else {
    //   console.log(" Not Good to go");
    // }
   
    alert("Login Alert");
    console.log(event);
    // alert("Login Alert");
    // console.log(event);
 }}
