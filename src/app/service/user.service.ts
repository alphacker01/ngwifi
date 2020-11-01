import { User } from '../model/user'
import { Subject } from 'rxjs'

export class UserService{

    private users: User[] =[
        
        new User('Diallo', 'Alpha', 'alphacker@gmail.com' , '77 493 69 63', 'JavaScript', ['Php', 'JavaScript' , 'C#'])
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){

        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){

        this.users.push(user);
        this.emitUsers();
    }


}