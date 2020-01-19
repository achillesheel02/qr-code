import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestSignupComponent} from './guest-signup/guest-signup.component';


const routes: Routes = [
  { path: 'signup', component: GuestSignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
