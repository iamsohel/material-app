import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {
  ErrorStateMatcher, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatProgressBarModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';


@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule
  ],
  bootstrap :[AuthComponent],
  providers : [],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class AuthModule { }
