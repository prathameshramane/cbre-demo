import { Component, OnInit } from '@angular/core';

// Icons
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'risk-control-card',
  templateUrl: './risk-control-card.component.html',
  styleUrls: ['./risk-control-card.component.css']
})
export class RiskControlCardComponent implements OnInit {
  faArrowRightSolid = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  learnMoreHandler() {
    console.log("Learn more clicked")
  }

}
