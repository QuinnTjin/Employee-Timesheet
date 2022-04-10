import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateCComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateCComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
