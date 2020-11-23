import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [UsersComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
