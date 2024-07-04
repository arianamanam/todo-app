import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImagesList } from './home-progress.model';

@Component({
  selector: 'app-home-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-progress.component.html',
})
export class HomeProgressComponent {
  imagesList: ImagesList[] = [
    {
      id: 1,
      src: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      alt: 'Avatar 1',
    },
    {
      id: 2,
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
      alt: 'Avatar 2',
    },
    {
      id: 3,
      src: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
      alt: 'Avatar 3',
    },
    {
      id:4,
      src: 'assets/icons/plus.svg',
      alt: 'Avatar 4',
    }
  ];
}
