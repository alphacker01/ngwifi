import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public isAuth: boolean = false;
 
  
  constructor (){
    setTimeout(
      ()=>{
        this.isAuth = true;
      },4000
    );
  }

  onAllumer(){
    console.log("Start All")
  }
}
