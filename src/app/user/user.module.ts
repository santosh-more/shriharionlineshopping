import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadProductComponent } from './components/upload-product/upload-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    UploadProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
