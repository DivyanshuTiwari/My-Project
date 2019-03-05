import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  @ViewChild('userName') userName: ElementRef;
  @ViewChild('userPassword') userPassword: ElementRef;
  
  constructor (private router:Router){
  }
   
  ClickFunction(event) { 
/**
 * == -> It will value only
 * === -> It will check value and datatype
 */

    if (this.userName.nativeElement.value==="abc@abc.com" && this.userPassword.nativeElement.value==="abc") {
      this.router.navigate(['/dashboard']);  
    } else {
      alert("Login Alert");
    }   
    
 }}
