import { Component } from '@angular/core';
import { PassValidationService } from 'src/app/shared/services/pass-validation.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: []
})
export class InputFieldComponent {
  constructor(public pS: PassValidationService) {}
}
