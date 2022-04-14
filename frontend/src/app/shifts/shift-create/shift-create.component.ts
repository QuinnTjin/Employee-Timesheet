import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  //This snippet of code generates the current date and time.
  current: Date = new Date();
  currentDate = this.current.getFullYear() + '-' + (this.current.getMonth() + 1) + '-' + this.current.getDate();
  currentTime = this.current.getHours() + ":" + this.current.getMinutes() + ":" + this.current.getSeconds();

  constructor(public shiftsService: ShiftService, private router: Router) {}

  ngOnInit(): void {
  }
  //This method sets the values of date and timestart to the time that the button is clicked.
  beginShift(){
    const current = new Date;
    this.shift.date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    this.shift.timestart = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //This piece of code hides the begin shift button and displays the end shift button.
    this.shift.active = true;
  }

  //This method sets the value of timeout to the time the button is clicked.
  endShift(){
    const current = new Date;
    this.shift.timeout = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //This piece of code resets the value of the button to begin shift.
    this.shift.active = false;
    //This piece of code calls the service class to send shift data back to the server.
    this.shiftsService.addShift(this.shift);
    console.log(this.shift);
  }

}
