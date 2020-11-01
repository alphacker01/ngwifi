import { Component, OnInit , OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service'
import { Subscriber, Subscription } from 'rxjs'
import { User } from '../model/user'



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit , OnDestroy{

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userSubscription = this.userService.userSubject.subscribe(

      (users: User[])=>{

        this.users = users;
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("complete !");
      }
    );

    this.userService.emitUsers();
  }

  ngOnDestroy(){

    this.userSubscription.unsubscribe();
  }


}
