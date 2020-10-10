import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';
import Validations from 'src/app/shared/utils/Validations';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  recoverPasswordForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    public validationFieldService: ValidationFieldService, 
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.recoverPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: Validations.passwordsMatch('password', 'confirmPassword')});
  }

  recoverPassword() {
    if(this.recoverPasswordForm.valid) {
      this.toastrService.success("Pronto! Agora é só realizar o login com a sua nova senha");
      this.router.navigateByUrl('/users/login');
    }
  }

}
