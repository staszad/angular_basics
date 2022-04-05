import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  Form,
} from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css', '../reset.css'],
})
export class AddressDetailsComponent {
  addressForm = this.fb.group({
    house: [''],
    suffix: [''],
    houseName: [''],
    streetAddress: [''],
    streetAddress1: [''],
    city: [''],
    county: [''],
    postcode: [''],
    easting: [''],
    northing: [''],
    description: [''],
  });
  constructor(private fb: FormBuilder) {}
}
