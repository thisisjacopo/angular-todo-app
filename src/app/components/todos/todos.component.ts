import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: true,
      },
    ];
  }

  //toggles the class of the todo and applies css on the id
  toggleDone(i: number) {
    this.todos.map((value, index) => {
      if (index === i) value.completed = !value.completed;
      return value;
    });
  }

  //matches the id of the todo and deletes it
  deleteTodo(i: number) {
    this.todos = this.todos.filter((value, index) => index !== i);
  }

  //adds todo by matchinging it to the binded input above and setting it to false, clears input by resetting value to empty string
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
