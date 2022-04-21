import { Component } from '@angular/core';

type Task = {
  title: string,
  completed: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-frontend';


  task = {
    title: "hola",
    completed: true
  }

  tasks = [
    {
      "title":"hola",
      "completed":true
    },
    {
      "title":"hola",
      "completed":false
    }
  ]


  completeTask(item:Task){
    item.completed = !item.completed;
  }
}
