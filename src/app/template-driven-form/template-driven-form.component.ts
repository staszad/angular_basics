import { Component } from '@angular/core';
import { Color } from './color';

function rgb(r: number, g: number, b: number) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  model = new Color(0, 0, 0);
  newColor() {
    this.model = new Color(0, 0, 0);
  }
  onSubmit() {}
}
