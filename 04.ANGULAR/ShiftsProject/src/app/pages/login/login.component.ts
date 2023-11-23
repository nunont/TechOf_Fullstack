import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb : FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    console.log(this.loginForm.value);
    let user = this.loginForm.value as User;

    this.userService.login(user.email, user.password).subscribe(
      (data) => {
        if (data) {
          let loggedUSer = data[0];
          this.userService.setLoggedUser(loggedUSer);
        }
      }
    )

  }

}
