import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private authListerSubs: Subscription;
  userIsAuthenticated = false;

  constructor(private authService: AuthService) { }
  //This method displays the header component
  ngOnInit(): void {
    this.authListerSubs = this.authService.getAuthStatusListener().subscribe((isAuthenticated) => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }
  //This method calls the authentication server class to logout.
  onLogout(){
    this.authService.logout();
  }

  //This method clears the listeners.
  ngOnDestroy(){
    this.authListerSubs.unsubscribe();
  }

}
