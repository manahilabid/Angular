import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class04');
  name="Manahil";
  message="Hello Angular";
  text="event binding in angular";
  ChangeData(value:any){
    this.text=value;
  }
  UpdateData(){
    this.text="Update function!";
  }
  language="Angular js";
}
