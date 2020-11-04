import { Component, OnInit } from '@angular/core';
import {Armor} from '../armordet';
import { ARMORS } from '../mock-armor';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {


  armor = ARMORS;

selectedArmor:Armor;

  myimage:string="assets/images/im2.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(armor: Armor): void {
    this.selectedArmor = armor;
  }
}
