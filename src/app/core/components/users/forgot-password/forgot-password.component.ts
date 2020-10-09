import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    public validationFieldService: ValidationFieldService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendEmail() {
    this.forgotPasswordForm.markAllAsTouched();

    if(this.forgotPasswordForm.valid) {
      this.toastrService.success("Confira o seu e-mail para recuperar seu acesso");
      this.router.navigateByUrl('/users/recover-password');
    }
  }
}
