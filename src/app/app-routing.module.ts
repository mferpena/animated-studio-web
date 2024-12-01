import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule) },
  { path: 'contact-us', loadChildren: () => import('./core/modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'works', loadChildren: () => import('./core/modules/works/works.module').then(m => m.WorksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
