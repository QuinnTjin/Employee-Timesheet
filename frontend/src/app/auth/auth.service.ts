import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
/**
 * This service class as an interface
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  //This method returns the token.
  getToken(){
    return this.token;
  }

  //This method returns the value of isAuthenticated.
  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  //This method is listening for any changes in user authentication.
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  //This method creates a new user when a user signs up, sending the user input data back to the server.
  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password}
    this.http.post("http://localhost:3000/api/users/signup", authData)
    .subscribe(response => {
      console.log(response);
    });
    this.router.navigate(["login"]);
  }

  //This method takes an email and password and verifies the login in order to access the application.
  login(email: string, password: string){
    const authData: AuthData = {email: email, password: password}
    this.http.post<{token: string}>("http://localhost:3000/api/users/login", authData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if(token){
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.router.navigate(["create"]);
      }
    });
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["login"]);
  }
}
