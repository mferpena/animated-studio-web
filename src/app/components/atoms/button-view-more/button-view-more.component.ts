import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-view-more',
  templateUrl: './button-view-more.component.html',
  styleUrls: ['./button-view-more.component.scss']
})
export class ButtonViewMoreComponent {
  @Input() text: string = 'Read more';
}
