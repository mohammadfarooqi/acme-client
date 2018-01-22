import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './client/activity/signup/signup.component';
import { ListComponent } from './client/activity/list/list.component';
import { HomeComponent } from './client/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'activity/signup', component: SignupComponent
      },
      {
        path: 'activity/list', component: ListComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
