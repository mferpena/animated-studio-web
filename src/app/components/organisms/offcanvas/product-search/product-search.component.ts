import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchQuery: string = '';
  products = [
    {
      image: 'https://via.placeholder.com/80',
      name: 'Big Mouth For Kids By Kids (F.K.B.K.)',
      price: 27.0
    },
    {
      image: 'https://via.placeholder.com/80',
      name: "Kids By Kidsuck On You",
      price: 25.0
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Shadow MonsterMouth Shadow Monster',
      price: 25.0
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Big Mouth Super Mouth Returns',
      price: 25.0
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'BLACK DYNAMITE! "Fight Smack in the Orphanage" Black/White Tee',
      price: 25.0
    }
  ];
}
