import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from 'src/app/components/pages/contact-us/contact-us.component';
import { ContactUsRoutingModule } from '../../router/contact-us/contact-us-routing.module';
import { ContactFormComponent } from 'src/app/components/organisms/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactUsComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactUsModule { }
