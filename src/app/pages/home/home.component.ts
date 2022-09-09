import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Routes
import ROUTES from '../../constants/routes';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToLogin() {
    this.router.navigate([ROUTES.LOGIN])
  }

}
