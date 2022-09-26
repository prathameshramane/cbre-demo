import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

// Pages
import {
  AssessmentComponent,
  HomeComponent,
  LoginComponent,
  ProfileComponent
} from './pages';

// Containers
import {
  RiskControlCardComponent,
  DasboardNavigatorComponent
} from './containers';
import { RiskControlComponent } from './pages/risk-control/risk-control.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AssessmentComponent,
    ProfileComponent,
    RiskControlCardComponent,
    DasboardNavigatorComponent,
    RiskControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
