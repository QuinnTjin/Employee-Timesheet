import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Shift } from '../shift.model';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
  shifts: Shift[] =[];
  shiftsSub: Subscription = new Subscription;
  private authStatusSubs: Subscription;
  public userIsAuthenticated = false;

  constructor(public shiftsService: ShiftService, private authService : AuthService){

  }

  ngOnInit() {
    this.shiftsService.getShifts();
    this.shiftsSub = this.shiftsService.getPostUpdateListener()
    .subscribe((shifts: Shift[]) => {
      this.shifts = shifts;
    })
    this.authStatusSubs = this.authService.getAuthStatusListener()
    .subscribe((isAuthenticated) => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    this.shiftsSub.unsubscribe();
    this.authStatusSubs.unsubscribe();
  }

}
