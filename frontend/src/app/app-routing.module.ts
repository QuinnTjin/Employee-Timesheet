import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateCComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'create', component: PostCreateCComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
