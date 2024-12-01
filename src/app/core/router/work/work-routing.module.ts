import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from 'src/app/components/pages/works/works.component';

const routes: Routes = [
  { path: '', component: WorksComponent, title: 'Work' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
