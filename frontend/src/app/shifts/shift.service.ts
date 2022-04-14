import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Shift } from './shift.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private shifts: Shift[] = [];
  private shiftsUpdated = new Subject<Shift[]>();

  constructor(private http : HttpClient) {}

  getShifts(){
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

  getPostUpdateListener() {
    return this.shiftsUpdated.asObservable();
  }

  addShift(shift: Shift) {
    this.http.post<{message : string, shiftId : string}>("http://localhost:3000/api/shifts", shift)
    .subscribe((responseData) => {
      const id = responseData.shiftId;
      shift.id = id;
      this.shifts.push(shift);
      this.shiftsUpdated.next([...this.shifts]);
    });
  }



}
