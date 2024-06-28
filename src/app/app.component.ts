import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomePageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-app';
}
