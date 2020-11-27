import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordService } from 'src/app/core/services/forgot-password.service';
import ForgotPassword from 'src/app/shared/models/ForgotPassword';
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
    private router: Router,
    private forgotPasswordService: ForgotPasswordService) { }

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
      const email = this.forgotPasswordForm.value as ForgotPassword;

      this.forgotPasswordService.postEmail(email).subscribe(
        () => {
          this.toastrService.success("E-mail enviado com sucesso! Confira o seu e-mail para recuperar seu acesso.");
          this.router.navigateByUrl('/users/login');
        },
        (error) => {
          if(error.error.message) {
            this.toastrService.error(error.error.message);
          } else {
            this.toastrService.error("Ocorreu um erro ao enviar o e-mail, tente novamente.");
          }
        }
      );
    }
  }
}
