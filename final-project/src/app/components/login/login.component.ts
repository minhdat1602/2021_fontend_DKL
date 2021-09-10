import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isActiveLoading: boolean = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  activeLoading() {
    this.isActiveLoading = true
  }

}
