import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupPasswordComponent } from './signup-password/signup-password.component';

const routes : Routes =[
  {
    path:'signup',
    component :SignupComponent
  },
  {
    path:'signuppassword',
    component :SignupPasswordComponent
  },
  {
    path:'**',
    pathMatch : 'full',
    redirectTo : '/signup'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
