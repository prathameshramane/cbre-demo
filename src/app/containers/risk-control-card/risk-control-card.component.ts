import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Icons
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Routes
import ROUTES from 'src/app/constants/routes';

@Component({
  selector: 'risk-control-card',
  templateUrl: './risk-control-card.component.html',
  styleUrls: ['./risk-control-card.component.css'],
})
export class RiskControlCardComponent implements OnInit {
  faArrowRightSolid = faArrowRight;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  learnMoreHandler() {
    this.router.navigate([ROUTES.RISK_CONTROL]);
  }
}
