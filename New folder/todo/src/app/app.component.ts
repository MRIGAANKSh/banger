import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './my-component/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  constructor(){
    // setTimeout(() => {
    //   this.age='20';
    // }, 2000);

  }
  
}
