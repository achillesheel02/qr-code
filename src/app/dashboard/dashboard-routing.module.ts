import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {MainComponent} from './main/main.component';
import {AllusersComponent} from '../allusers/allusers.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children:
    [{ path: 'main', component: MainComponent},
      { path: 'users', component: AllusersComponent},]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
