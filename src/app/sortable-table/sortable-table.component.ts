import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { ToDo } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sortable-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sortable-table.component.html',
  styleUrl: './sortable-table.component.scss'
})
export class SortableTableComponent implements OnInit {

  todos: ToDo[] = [];
  order = false;

  constructor(
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    // GET TO DOs
    this.generalService.getTodos().subscribe(res => {
      this.todos = res;
      console.log(this.todos)
    });
  }
  
  // SORT TO DOs BY TITLE OR BY COMPLETION STATUS
  sort(tab: "title" | "completed") {
    this.order = !this.order
    this.todos.sort((a, b) => {
      if(a[tab] < b[tab]) { return this.order ? -1 : 1 }
      if(a[tab] > b[tab]) { return this.order ? 1 : -1 }
      return 0;
    })
  }

}
