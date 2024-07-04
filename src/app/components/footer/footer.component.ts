import { Component } from '@angular/core';
import { MenuList } from './footer.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
menuList:MenuList[]=[
{
  route:'/home',
  imagepath:'assets/icons/home.svg',
  alt:'home icon'
},
{
  route:'/calendar',
  imagepath:'assets/icons/calendar.svg',
  alt:'calendar icon'
},
{
  route:'/chat',
  imagepath:'assets/icons/chat.svg',
  alt:'chat icon'
},
{
  route:'/people',
  imagepath:'assets/icons/people.svg',
  alt:'people icon'
},
]
}

