import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
