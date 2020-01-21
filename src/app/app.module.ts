import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {QrCodeModule} from 'ng-qrcode';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GuestSignupComponent } from './guest-signup/guest-signup.component';
import { LoginComponent } from './login/login.component';
import { AllusersComponent } from './allusers/allusers.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { OwnerComponent } from './owner/owner.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { VisitsComponent } from './visits/visits.component';
import { VisitsCreateComponent } from './visits-create/visits-create.component';
import { PersonnelCreateComponent } from './personnel-create/personnel-create.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { BusinessesCreateComponent } from './businesses-create/businesses-create.component';
import { BuildingsCreateComponent } from './buildings-create/buildings-create.component';
import { AllusersCreateComponent } from './allusers-create/allusers-create.component';
import { AllusersEditComponent } from './allusers-edit/allusers-edit.component';
import { BuildingsEditComponent } from './buildings-edit/buildings-edit.component';
import { BusinessesEditComponent } from './businesses-edit/businesses-edit.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { PersonnelEditComponent } from './personnel-edit/personnel-edit.component';
import { VisitsEditComponent } from './visits-edit/visits-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GuestSignupComponent,
    LoginComponent,
    AllusersComponent,
    BuildingsComponent,
    BusinessesComponent,
    OwnerComponent,
    PersonnelComponent,
    VisitsComponent,
    VisitsCreateComponent,
    PersonnelCreateComponent,
    OwnerCreateComponent,
    BusinessesCreateComponent,
    BuildingsCreateComponent,
    AllusersCreateComponent,
    AllusersEditComponent,
    BuildingsEditComponent,
    BusinessesEditComponent,
    OwnerEditComponent,
    PersonnelEditComponent,
    VisitsEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    QrCodeModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    DashboardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
