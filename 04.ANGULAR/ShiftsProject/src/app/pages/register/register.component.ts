import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

registerForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  birthDate: [''],
  email: [''],
  password: [''],
  confirmPassword: ['']
});

  constructor(private fb : FormBuilder, private userService : UserService,
    private router : Router
    ) { }

  onSubmit(){

    if (this.registerForm.invalid) return;

    if (this.registerForm.value.password != this.registerForm.value.confirmPassword) return;

    let user = this.registerForm.value as any as User;
    user.role = 'user';
    
    this.userService.create(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );

  }
}
