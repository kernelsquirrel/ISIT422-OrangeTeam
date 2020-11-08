import { Component, OnInit } from '@angular/core';

import { Armor } from '../armordet';
import { ArmorService } from '../armor.service';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  armors: Armor[];

  selectedArmor:Armor;

  myimage:string="assets/images/im2.jpeg";

  constructor(private armorService: ArmorService) { }

  ngOnInit(): void {
    this.getArmors();
  }

  onSelect(armor: Armor): void {
    this.selectedArmor = armor;
  }

  getArmors(): void {
    this.armorService.getArmors()
    .subscribe(armors => this.armors = armors);
  }

  selectedItem: Armor;

  selectChangeHandler (event: any) {
    // this.selectedItem = event.target.value;

    let found = this.armors.find(element => element.name > event.target.value);
    this.selectedItem = found;
  }
}
