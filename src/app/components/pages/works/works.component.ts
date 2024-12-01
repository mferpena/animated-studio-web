import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/core/services/works/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  hoverImages: Array<{ defaultImage: string; hoverImage: string; hoverText: string }> = [];
  showAlert: boolean = false;

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    if (!this.worksService.validateTimesnap()) {
      this.showAlert = true;
    }

    // Obtiene las imágenes
    this.hoverImages = this.worksService.getHoverImages();
  }

  handleAlertConfirm(): void {
    this.showAlert = false;
    this.worksService.validateTimesnap(); // Registra el nuevo timesnap
  }
}
