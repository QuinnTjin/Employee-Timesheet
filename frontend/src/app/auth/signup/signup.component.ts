import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  //This method creates a new user.
  onSignup(form : NgForm){
  //This method will not call the server with form the values unless the form is valid.
    if (form.invalid){
      return;
    }
    console.log(form.value.email);
    console.log(form.value.password);
    this.authService.createUser(form.value.email, form.value.password);
  }
}
