import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor (private router:Router){

  }
  ClickFunction(event) { 
/**
 * == -> It will value only
 * === -> It will check value and datatype
 */
    if (Username==="abc@abc.com" && Password==="abc") {
      this.router.navigate(['/dashboard']);
      
    } else {
      alert("Login Alert");
    }

   
   
    
    console.log(event);
    // alert("Login Alert");
    // console.log(event);
 }}
