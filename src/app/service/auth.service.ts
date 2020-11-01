export class AuthService {

    isAuth: boolean = true;
    users = [

        {
            name: 'alpha',
            password: 'passer'
        },
        {
            name: 'root',
            password: 'nano'
        }
    ];

    public SignIn(login: string , password: string){

        for(let user of this.users){

            if(user.name == login && user.password == password){

                this.isAuth = true;
                return true;
            }
        }
        return false;
    }

    public signOut(){

        this.isAuth = false;
    }
}