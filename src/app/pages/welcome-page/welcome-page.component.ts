import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './welcome-page.component.html',
})
export class WelcomePageComponent {}
