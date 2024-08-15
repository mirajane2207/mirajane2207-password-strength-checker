import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from './services/password-strength/password-strength.service';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ReactiveFormsModule,
    PasswordInputComponent,
    PasswordStrengthComponent,
  ],
})
export class AppComponent {
  form: FormGroup;
  passwordStrength: string = 'empty';

  constructor(
    private fb: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) {
    this.form = this.fb.group({
      password: [''],
    });

    this.form.get('password')?.valueChanges.subscribe((value) => {
      this.passwordStrength =
        this.passwordStrengthService.calculateStrength(value);
    });
  }
}
