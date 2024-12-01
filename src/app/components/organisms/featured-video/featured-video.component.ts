import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.scss']
})
export class FeaturedVideoComponent {
  @Input() videoSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
}
