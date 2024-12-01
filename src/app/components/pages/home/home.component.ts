import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredNews = [
    {
      imageSrc: 'https://peepoodo.bobbypills.com/images/sc/peepoodo_ep1.jpg',
      imageAlt: 'First news image',
      title: 'Drunkards, Dragons & Delinquents',
      description: 'Chris Prynoski talks about his inspirations for the series.',
      buttonText: 'Read more'
    },
    {
      imageSrc: 'https://peepoodo.bobbypills.com/images/sc/peepoodo_ep2.jpg',
      imageAlt: 'Second news image',
      title: 'Star Trek Lower Decks',
      description: 'A deep dive into the hilarious animated Star Trek series.',
      buttonText: 'Discover'
    },
    {
      imageSrc: 'https://peepoodo.bobbypills.com/images/sc/peepoodo_ep3.jpg',
      imageAlt: 'Third news image',
      title: 'Midnight Gospel',
      description: 'Explore the philosophical journey of Midnight Gospel.',
      buttonText: 'Learn more'
    }
  ];
}
