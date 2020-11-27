import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecoverPasswordService } from 'src/app/core/services/recover-password.service';
import RecoverPassword from 'src/app/shared/models/RecoverPassword';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';
import Validations from 'src/app/shared/utils/Validations';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  token: string;
  recoverPasswordForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    public validationFieldService: ValidationFieldService, 
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private activetedRoute: ActivatedRoute,
    private recoverPasswordService: RecoverPasswordService) { }

  ngOnInit(): void {
    this.buildForm();
    this.token = this.activetedRoute.snapshot.queryParams.token;
  }

  buildForm(): void {
    this.recoverPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword: ['', Validators.required],
    }, { validator: Validations.passwordsMatch('password', 'confirmPassword')});
  }

  recoverPassword() {
    if(this.recoverPasswordForm.valid) {
      const recoverPassword = this.recoverPasswordForm.value as RecoverPassword;
      recoverPassword.token = this.token
      delete recoverPassword["confirmPassword"];

      this.recoverPasswordService.recoverPassword(recoverPassword).subscribe(
        () => {
          this.toastrService.success("Pronto! Agora é só realizar o login com a sua nova senha");
          this.router.navigateByUrl('/users/login');
        },
        (error) => {
          if(error.error.message) {
            this.toastrService.error(error.error.message);
          } else {
            this.toastrService.error("Ocorreu um erro ao redefinir a senha, tente novamente.");
          }
        }
      );
    }
  }

}
