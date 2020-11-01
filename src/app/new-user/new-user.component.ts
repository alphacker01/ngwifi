import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService , private router: Router) { }

  ngOnInit(): void {

    this.initForm()
  }

  initForm(){

    this.userForm = this.formBuilder.group({

      name: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required , Validators.email]],
      tel: ['',Validators.required],
      codeIn: ['',Validators.required],
      otherSquils: this.formBuilder.array([])
    });

    
  }

  onSubmitForm(){

    console.log(this.userForm.value);
    
    const formValue = this.userForm.value;
    const newUser = new User(

      formValue['name'],
      formValue['lastName'],
      formValue['email'],
      formValue['tel'],
      formValue['codeIn'],
      formValue['otherSquils'] ? formValue['otherSquils']: []
    );

    this.userService.addUser(newUser);
    this.router.navigate(['/users']);

  }

  getSquils(): FormArray{
    
    return this.userForm.get('otherSquils') as FormArray;
  }

  onAddSquils(){

    const newSquilsControl = this.formBuilder.control(null,Validators.required);
    this.getSquils().push(newSquilsControl);
  }

}
