import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressOtherComponent } from './address-other/address-other.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TemplateDrivenFormComponent,
    AddressDetailsComponent,
    AddressOtherComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
