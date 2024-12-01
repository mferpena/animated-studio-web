import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  heroes = [
    { name: 'Superman', image: 'https://via.placeholder.com/150?text=Superman' },
    { name: 'Batman', image: 'https://via.placeholder.com/150?text=Batman' },
    { name: 'Wonder Woman', image: 'https://via.placeholder.com/150?text=Wonder+Woman' },
    { name: 'Green Lantern', image: 'https://via.placeholder.com/150?text=Green+Lantern' },
    { name: 'The Flash', image: 'https://via.placeholder.com/150?text=The+Flash' },
    { name: 'Aquaman', image: 'https://via.placeholder.com/150?text=Aquaman' },
    { name: 'Cyborg', image: 'https://via.placeholder.com/150?text=Cyborg' }
  ];
}
