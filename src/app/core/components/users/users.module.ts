import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../../../material.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../../../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    NgxMaskModule.forRoot()
  ]
})
export class UsersModule { }
