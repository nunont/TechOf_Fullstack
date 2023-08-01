import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  username! : string;
  password! : string;

  register() {
    console.log(this.username, this.password);
    //local storage save
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    alert('Registered successfully');
  }

}
