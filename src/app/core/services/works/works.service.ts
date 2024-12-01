import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  private readonly TIMESNAP_KEY = 'timesnap';

  constructor(private localStorageService: LocalStorageService) { }

  validateTimesnap(): boolean {
    const timesnap = this.localStorageService.getItem<string>(this.TIMESNAP_KEY);

    if (!timesnap) {
      const currentTimestamp = new Date().toISOString();
      this.localStorageService.setItem(this.TIMESNAP_KEY, currentTimestamp);
      return false;
    }

    const timesnapDate = new Date(timesnap);
    const now = new Date();

    const validDuration = 24 * 60 * 60 * 1000;

    if (now.getTime() - timesnapDate.getTime() > validDuration) {
      const currentTimestamp = new Date().toISOString();
      this.localStorageService.setItem(this.TIMESNAP_KEY, currentTimestamp);
      return false;
    }

    return true;
  }

  getHoverImages(): Array<{ defaultImage: string; hoverImage: string; hoverText: string }> {
    return Array.from({ length: 16 }).map((_, index) => ({
      defaultImage: `https://via.placeholder.com/300x200?text=Default+Image+${index + 1}`,
      hoverImage: `https://via.placeholder.com/300x200?text=Hover+Image+${index + 1}`,
      hoverText: `Text ${index + 1}`,
    }));
  }
}
