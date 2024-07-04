import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../components/Home/home-header/home-header.component';
import { HomeProgressComponent } from '../../components/Home/home-progress/home-progress.component';
import { TodayTaskComponent } from '../../components/Home/today-task/today-task.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeaderComponent,HomeProgressComponent,TodayTaskComponent,FooterComponent, FooterComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
