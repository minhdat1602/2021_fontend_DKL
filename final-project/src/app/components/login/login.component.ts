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
  successLogin = false
  sucessLoginMessage = "Đăng nhập thành công"
  isActiveLoading: boolean = false

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.authService.login(username, password)
    this.isActiveLoading = true
    setTimeout(() => {
      this.successLogin = true
      this.isActiveLoading = false
    }, 2000)
  }

}
