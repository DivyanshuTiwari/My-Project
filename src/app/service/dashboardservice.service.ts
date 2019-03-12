import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  constructor() { }
  
  getUserList() {
    return [
              {
                name: "Ankush",
                age:25,      
              },
              {
                name: "Michael",
                age:10,
                student:false      
              },
              {
                name: "John",
                age:15,      
              },
              {
                name: "Rachel",
                age:25,   
              }   
            ];
  }

  getYearList(){
      return ['January', 'March', 'April', 'May', 'June', 'July']
  }

  welcomeMessage(){
    return "Hey, Welcome to my app";
  }
  
}
