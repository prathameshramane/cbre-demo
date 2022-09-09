import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Routes
import ROUTES from '../../constants/routes';

interface loginFormData {
  email: string,
  password: string
}

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(data: loginFormData) {
    console.log(data)
    this.router.navigate([ROUTES.DASHBOARD])
  }

}
