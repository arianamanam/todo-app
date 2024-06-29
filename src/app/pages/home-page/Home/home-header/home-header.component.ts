import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
 imageList=[{id:1,src:'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',alt: 'Avatar 1'},{id:2,src:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',alt: 'Avatar 2'},{id:3,src:'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp',alt: 'Avatar 3'} ]

  

}
