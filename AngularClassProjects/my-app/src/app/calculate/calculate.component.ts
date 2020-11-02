import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  qty: number = 0;     // These 2 lines are what I changed, these are this components “state”, or model
  cost: number = 0;    //  They are just normal class properties
  constructor() { }

  ngOnInit(): void {
  }

}
