import { Component } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  password!: string;
  isWeak: boolean = false;
  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  checkPasswordStrength() {
    const length = this.password ? this.password.length : 0;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[^a-zA-Z0-9\s]/g.test(this.password);

    this.isWeak = length > 0 && length < 8;
    this.isEasy = length >= 8 && (hasLetters || hasDigits || hasSymbols);
    this.isMedium = length >= 8 && ((hasLetters && hasDigits) || (hasDigits && hasSymbols) || (hasLetters && hasSymbols));
    this.isStrong = length >= 8 && hasLetters && hasDigits && hasSymbols;

  }
}
