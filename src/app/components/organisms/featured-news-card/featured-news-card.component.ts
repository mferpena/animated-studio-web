import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-news-card',
  templateUrl: './featured-news-card.component.html',
  styleUrls: ['./featured-news-card.component.scss']
})
export class FeaturedNewsCardComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = 'Featured image';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = 'Read more';
}
