import { Component } from '@angular/core';

@Component({
  selector: 'app-work-filter',
  templateUrl: './work-filter.component.html',
  styleUrls: ['./work-filter.component.scss']
})
export class WorkFilterComponent {
  categories = ['All', 'TV Special', 'Series', 'Advertising', 'Cinematics', 'Features'];
  selectedCategory = 'All';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
