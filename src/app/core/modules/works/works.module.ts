import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from 'src/app/components/pages/works/works.component';
import { WorksRoutingModule } from '../../router/works/works-routing.module';
import { HoverImageComponent } from 'src/app/components/atoms/hover-image/hover-image.component';
import { WorkFilterComponent } from 'src/app/components/molecules/work-filter/work-filter.component';
import { FilterSearchComponent } from 'src/app/components/organisms/offcanvas/filter-search/filter-search.component';
import { AlertComponent } from 'src/app/components/atoms/alert/alert.component';

@NgModule({
  declarations: [
    WorksComponent,
    HoverImageComponent,
    WorkFilterComponent,
    FilterSearchComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
