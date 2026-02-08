import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,UpperCasePipe,LowerCasePipe,TitleCasePipe ,DatePipe ,CurrencyPipe , CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class05');
  name="hello world";
  DOB="1985-02-05";
  number=200;

}
