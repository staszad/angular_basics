import { Component } from '@angular/core';
import { Address } from './address';

@Component({
  selector: 'app-address-other',
  templateUrl: './address-other.component.html',
  styleUrls: ['./address-other.component.css', '../reset.css'],
})
export class AddressOtherComponent {
  address = new Address('', '', '', '', '', '', '', '42-680', '', '', '');
}
