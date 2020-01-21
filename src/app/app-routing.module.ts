import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestSignupComponent} from './guest-signup/guest-signup.component';
import {LoginComponent} from './login/login.component';
import {AllusersComponent} from './allusers/allusers.component';
import {BuildingsComponent} from './buildings/buildings.component';
import {BusinessesComponent} from './businesses/businesses.component';
import {OwnerComponent} from './owner/owner.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {VisitsComponent} from './visits/visits.component';

import {AllusersCreateComponent} from './allusers-create/allusers-create.component';
import {BuildingsCreateComponent} from './buildings-create/buildings-create.component';
import {BusinessesCreateComponent} from './businesses-create/businesses-create.component';
import {OwnerCreateComponent} from './owner-create/owner-create.component';
import {PersonnelCreateComponent} from './personnel-create/personnel-create.component';
import {VisitsCreateComponent} from './visits-create/visits-create.component';

import {AllusersEditComponent} from './allusers-edit/allusers-edit.component';
import {BuildingsEditComponent} from './buildings-edit/buildings-edit.component';
import {BusinessesEditComponent} from './businesses-edit/businesses-edit.component';
import {OwnerEditComponent} from './owner-edit/owner-edit.component';
import {PersonnelEditComponent} from './personnel-edit/personnel-edit.component';
import {VisitsEditComponent} from './visits-edit/visits-edit.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'signup', component: GuestSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'visits', component: VisitsComponent },

  { path: 'allusers-create', component: AllusersCreateComponent },
  { path: 'buildings-create', component: BuildingsCreateComponent },
  { path: 'businesses-create', component: BusinessesCreateComponent },
  { path: 'owner-create', component: OwnerCreateComponent },
  { path: 'personnel-create', component: PersonnelCreateComponent },
  { path: 'visits-create', component: VisitsCreateComponent },

  { path: 'allusers-edit', component: AllusersEditComponent },
  { path: 'buildings-edit', component: BuildingsEditComponent },
  { path: 'businesses-edit', component: BusinessesEditComponent },
  { path: 'owner-edit', component: OwnerEditComponent },
  { path: 'personnel-edit', component: PersonnelEditComponent },
  { path: 'visits-edit', component: VisitsEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
