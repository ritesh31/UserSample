import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
// import { UserCreateComponent } from './modules/usermodule/createuser/usercreate.component';
// import { UserListComponent } from './modules/usermodule/listuser/userlist.component';
import { UserCreateComponent } from './modules/usermodule/createuser/usercreate.component';
import { UserListComponent } from './modules/usermodule/listuser/userlist.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: UserCreateComponent },
      { path: 'usercreate', component: UserCreateComponent },
      { path: 'usercreate/:id', component: UserCreateComponent },
      { path: 'userlist', component: UserListComponent }
    ]
  },
  { path: '**', component: LoginComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
