import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes
import ROUTES from './constants/routes';

// Pages
import {
  AssessmentComponent,
  HomeComponent,
  LoginComponent,
  ProfileComponent,
  RiskControlComponent,
} from './pages';

const routes: Routes = [
  { path: ROUTES.HOME, component: HomeComponent },
  { path: ROUTES.LOGIN, component: LoginComponent },
  { path: ROUTES.DASHBOARD, redirectTo: ROUTES.ASSESSMENT, pathMatch: 'full' },
  { path: ROUTES.ASSESSMENT, component: AssessmentComponent },
  { path: ROUTES.PROFILE, component: ProfileComponent },
  { path: ROUTES.RISK_CONTROL, component: RiskControlComponent },
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
