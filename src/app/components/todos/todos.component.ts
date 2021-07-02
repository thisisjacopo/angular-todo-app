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

  toggleDone(i: number) {
    this.todos.map((value, index) => {
      if (index === i) value.completed = !value.completed;
      return value;
    });
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((value, index) => index !== i);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
