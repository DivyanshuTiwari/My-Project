import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService1Service {

  constructor() { }

  flagCheckingFunction(){

    return [
      {
        Category:"A1",
        Uid:123
              
      },
      {
        Category:"B1",
        Uid:345
      },
      {
        Category:"C1",
        Uid:567      
      },
      {
        Category:"D1",
        Uid:789   
      }   
    ];
}
  }

