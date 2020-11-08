import { Component, OnInit } from '@angular/core';
import {Armor} from '../armordet';

@Component({
  selector: 'app-combat-page',
  templateUrl: './combat-page.component.html',
  styleUrls: ['./combat-page.component.css']
})
export class CombatPageComponent implements OnInit {

  selectedArmor:Armor;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(armor: Armor): void {
    this.selectedArmor = armor;
  }
}
