import { Component } from '@angular/core';
import { LoginService } from './services/login.services';
import { LoginDTO } from './interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = ''
  password = ''

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  doLogin() {
    const loginDTO: LoginDTO = {
      email: this.email,
      password: this.password
    }
    this.loginService.login(loginDTO).subscribe((res: any) => {
      if (res.status) {
        this.router.navigateByUrl('/product')
        this.email = '';
        this.password = '';
      } else {
        confirm('Login Failed')
      }
    }), () => {
      confirm('Login Failed')
    };
  }
}
