import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomePageComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // id:number=10;
  // status:string='فعال'
  // serverName='test';
  title = 'todo-app';
}

