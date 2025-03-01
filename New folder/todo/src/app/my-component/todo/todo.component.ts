import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos:Todo[];
  constructor(){
    todos=[{
      sno:3,
      title:'mrigaank',
      desc:'sdsddssd',
      active:true,
    }]
  }
}
