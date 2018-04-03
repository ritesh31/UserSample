import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserCreateComponent } from './modules/usermodule/createuser/usercreate.component';
import { UserListComponent } from './modules/usermodule/listuser/userlist.component';
// import { UserListComponent } from './modules/usermodule/listuser/userlist.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './modules/usermodule/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
