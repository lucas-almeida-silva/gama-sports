import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../../../material.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class UsersModule { }
