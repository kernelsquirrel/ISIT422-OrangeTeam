import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItem';
import { TODOS } from '../mock-ToDos';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  TheToDos= TODOS;

  selectedToDoItem: ToDoItem;

 onSelect(PassedInToDoItem: ToDoItem): void {
   this.selectedToDoItem = PassedInToDoItem;
 }


  constructor() { }

  ngOnInit(): void {
  }

}
