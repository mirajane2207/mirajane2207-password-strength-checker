import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() strength: string = '';

  getBackgroundColor(index: number): string {
    if (this.strength === 'weak') {
      return index === 0 ? 'red' : 'gray';
    } else if (this.strength === 'medium') {
      return index < 2 ? 'yellow' : 'gray';
    } else if (this.strength === 'strong') {
      return 'green';
    }
    return 'gray';
  }
}
