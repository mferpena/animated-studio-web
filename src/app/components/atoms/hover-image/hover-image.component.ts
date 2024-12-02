import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-image',
  templateUrl: './hover-image.component.html',
  styleUrls: ['./hover-image.component.scss']
})
export class HoverImageComponent {
  @Input() defaultImage: string = '';
  @Input() hoverImage: string = '';
  @Input() hoverText: string = '';
}
