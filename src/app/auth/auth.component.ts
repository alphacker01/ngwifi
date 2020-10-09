import { Component, OnInit , Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  @Input() login: string;
  @Input() password: string;

  ErrorMsg: string;

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {

    this.authStatus =  this.authService.isAuth;
  }

  onSignIn(){

    this.authStatus = this.authService.SignIn(this.login , this.password)

    if(this.authStatus == true){

      console.log("ok");
      this.router.navigate(['devices']);
    }else{

      this.ErrorMsg = "Login Or Password Failed !";
      //this.router.navigate(['auth']);
    }
  }

}
