import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShiftListComponent } from './shifts/shift-list/shift-list.component';
import { ShiftCreateComponent } from './shifts/shift-create/shift-create.component';
import { AuthGuard } from './auth/auth.guard';

//The application should not be accessed by an unauthorized user.
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'shifts', component: ShiftListComponent, canActivate: [AuthGuard]},
  { path: 'create', component: ShiftCreateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
