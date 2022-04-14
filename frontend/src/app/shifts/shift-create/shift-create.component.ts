import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shift } from '../shift.model';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.css']
})
export class ShiftCreateComponent implements OnInit {
  shift: Shift = {
    id: null,
    date: null,
    timestart: null,
    timeout: null,
    active: false
  };
  current: Date = new Date();
  currentDate = this.current.getFullYear() + '-' + (this.current.getMonth() + 1) + '-' + this.current.getDate();
  currentTime = this.current.getHours() + ":" + this.current.getMinutes() + ":" + this.current.getSeconds();

  constructor(public shiftsService: ShiftService) {}


  ngOnInit(): void {
  }
  getTime(){
    const dateTime = this.currentDate + ' ' + this.currentTime;
    return dateTime;
  }
  beginShift(){
    const current = new Date;
    this.shift.date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    this.shift.timestart = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    this.shift.active = true;
  }

  endShift(){
    const current = new Date;
    this.shift.timeout = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    this.shift.active = false;
    this.shiftsService.addShift(this.shift);
    console.log(this.shift);
  }

}
