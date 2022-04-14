import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Shift } from './shift.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
/**
 * This service class contains methods that allow data related to shifts to be accessed by the shift components.
 * This is similar to an interface in Java.
 * Includes: getShifts(), getPostUpdateListener(), addShift(shift: Shift)
 */

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private shifts: Shift[] = [];
  private shiftsUpdated = new Subject<Shift[]>();

  constructor(private http : HttpClient, private router: Router) {}

  //This method returns all created shifts stored in the DB.
  getShifts(){
    //requests shifts from server
    this.http
    .get<{message: string, shifts: any}>(
      "http://localhost:3000/api/shifts"
      )
    .pipe(map((shiftData: any) => {
      return shiftData.shifts.map(shift => {
        return{
          id: shift.id,
          date: shift.date,
          timestart: shift.timestart,
          timeout: shift.timeout
        };
      });
    }))
    .subscribe((transformedShifts) =>{
      this.shifts = transformedShifts;
      this.shiftsUpdated.next([...this.shifts])
    });
  }

  //This methods listens for updating shifts.
  getPostUpdateListener() {
    return this.shiftsUpdated.asObservable();
  }

  //This method adds a shift by sending shift data back to the server.
  addShift(shift: Shift) {
    this.http.post<{message : string, shiftId : string}>("http://localhost:3000/api/shifts", shift)
    .subscribe((responseData) => {
      const id = responseData.shiftId;
      shift.id = id;
      this.shifts.push(shift);
      this.shiftsUpdated.next([...this.shifts]);
      this.router.navigate(["shifts"]);
    });
  }



}
