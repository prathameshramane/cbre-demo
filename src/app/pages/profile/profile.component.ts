import { Component, OnInit } from '@angular/core';

// Icons
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileIcon = faCircleUser;

  constructor() { }

  ngOnInit(): void {
  }

}
