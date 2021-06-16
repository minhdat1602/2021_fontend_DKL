import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {
    uid: '',
    email: '',
    displayName: '',
    phoneNumber: '',
    providerId: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.authService.register(this.user.email, this.user.password)
  }

}
