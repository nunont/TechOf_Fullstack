import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})

export class SecretComponent implements OnInit {
  
  userFromRegister! :string;
  passFromRegister! :string;

  ngOnInit(): void {
    this.userFromRegister = localStorage.getItem('username')!;
    this.passFromRegister = localStorage.getItem('password')!;
  }
}
