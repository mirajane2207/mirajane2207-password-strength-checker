import { Component } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-strength-checker';
}
