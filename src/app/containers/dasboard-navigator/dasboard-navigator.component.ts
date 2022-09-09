import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Icons
import { faUser as profileIcon, faRectangleList as assessmentIcon } from '@fortawesome/free-regular-svg-icons';

// Routes
import ROUTES from '../../constants/routes';

@Component({
  selector: 'dasboard-navigator',
  templateUrl: './dasboard-navigator.component.html',
  styleUrls: ['./dasboard-navigator.component.css']
})
export class DasboardNavigatorComponent implements OnInit {
  profileIcon = profileIcon;
  assessmentIcon = assessmentIcon;

  profileRoute = ROUTES.PROFILE;
  assessmentRoute = ROUTES.ASSESSMENT;

  isAssessmentActive: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAssessmentActive = this.router.url.substring(1) == ROUTES.ASSESSMENT;
  }

  navigate(navigateRoute: string) {
    this.router.navigate([navigateRoute]);
  }
}
