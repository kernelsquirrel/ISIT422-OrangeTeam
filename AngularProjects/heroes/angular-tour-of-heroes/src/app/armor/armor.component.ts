import { Component, Input, OnInit } from '@angular/core';

import { Armor } from '../armordet';
import { ArmorService } from '../armor.service';

@Component({
  selector: 'tr[app-armor]',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  armors: Armor[];

  // selectedArmor:Armor;

  // myimage:string="assets/images/im2.jpeg";

  constructor(private armorService: ArmorService) { }

  ngOnInit(): void {
    this.getArmors();
  }

  // onSelect(armor: Armor): void {
  //   this.selectedArmor = armor;
  // }

  getArmors(): void {
    this.armorService.getArmors()
    .subscribe(armors => this.armors = armors);
  }

  selectedItem: Armor;

  armorRating: number;
  armorStrength: number;
  armorDefense: number;
  armorSpeed: number;

  selectChangeHandler (event: any) {
    this.selectedItem = this.armors.find(element => element.name === event.target.value);
    this.armorRating = this.selectedItem.rating;
    this.armorStrength = this.selectedItem.strength;
    this.armorDefense = this.selectedItem.defense;
    this.armorSpeed = this.selectedItem.speed;
  }
}
