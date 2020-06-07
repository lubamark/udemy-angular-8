import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Todo, TodoService} from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor( private todosService: TodoService ) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todosService.addTodo(newTodo)
      .subscribe(todo => {
      this.todos.unshift(todo);
      this.todoTitle = '';

    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe({
        next: todos => {
          this.todos = todos;
          this.loading = false;
        },
        error: err => this.error = err.message
      });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter((item) =>  item.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => this.todos.find(item =>  item.id === id).completed = true);
  }
}
