import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

export const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  }, {
    path:'home',
    component:HomePageComponent
  },{
    path:'new-task',
    component:NewTaskComponent
  }
];
