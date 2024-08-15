import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'weak';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'strong';
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return 'medium';
    } else {
      return 'empty';
    }
  }
}
