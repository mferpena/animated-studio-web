import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/app/components/pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: ContactUsComponent, title: 'Contact us' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
