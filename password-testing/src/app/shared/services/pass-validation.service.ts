import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PassValidationService {
  passwordControl: FormControl = new FormControl('');

  isWeak: boolean = false;
  isEasy: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  constructor() {
    this.passwordControl.valueChanges.subscribe((value) => {
      this.checkPasswordStrength(value);
    });
  }

  checkPasswordStrength(password: string) {
    const length = password ? password.length : 0;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z0-9\s]/g.test(password);

    this.isWeak = length > 0 && length < 8;
    this.isEasy = length >= 8 && (hasLetters || hasDigits || hasSymbols);
    this.isMedium = length >= 8 && ((hasLetters && hasDigits) || (hasDigits && hasSymbols) || (hasLetters && hasSymbols));
    this.isStrong = length >= 8 && hasLetters && hasDigits && hasSymbols;
  }
}
