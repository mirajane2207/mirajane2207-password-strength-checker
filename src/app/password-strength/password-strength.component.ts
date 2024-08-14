import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  imports: [FormsModule, CommonModule] 
})
export class PasswordStrengthComponent {
  password: string = '';
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength(): void {
    if (this.password.length === 0) {
      this.sectionColors = ['gray', 'gray', 'gray'];
    } else if (this.password.length < 8) {
      this.sectionColors = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasNumbers = /[0-9]/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.sectionColors = ['green', 'green', 'green'];
      } else if (
        (hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols)
      ) {
        this.sectionColors = ['yellow', 'yellow', 'gray'];
      } else {
        this.sectionColors = ['red', 'gray', 'gray'];
      }
    }
  }
}
