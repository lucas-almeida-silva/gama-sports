import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';
import Validations from 'src/app/shared/utils/Validations';
import { UsersService } from 'src/app/core/services/users.service';
import User from 'src/app/shared/models/User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  phoneMask= "(00) 0000-0000";
  maxDate: Date = new Date();
  loading: boolean = false;

  constructor(
    public validationFieldService: ValidationFieldService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private toastrService: ToastrService,
    private usersService: UsersService) {}

  ngOnInit(): void {
    this.buildForm();
    this.setDynamicMaskForPhone();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, Validations.validateCpf]],
      birthdate: ['', [Validators.required, Validations.validateDate]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^((\(([1-9]{2})\))|([1-9]{2}))([ .-]?)(9[0-9]|[0-9])[0-9]{3}([ .-]?)[0-9]{4}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword: ['', Validators.required],
    }, { validator: Validations.passwordsMatch('password', 'confirmPassword')})
  }

  registerUser() {
    this.registerForm.markAllAsTouched();
    
    if(this.registerForm.valid) {
      const user = this.registerForm.value as User;
      delete user['confirmPassword'];

      this.usersService.postUser(user).subscribe(
        () => {
          this.toastrService.success("Cadastro efetuado com sucesso! Agora basta efetuar o login e aproveitar!");
          this.router.navigateByUrl('/users/login');
        },
        (error) => {
          if(error.error.message) {
            this.toastrService.error(error.error.message);
          } else {
            this.toastrService.error("Ocorreu um erro ao efetuar o cadastro, tente novamente.");
          }
        }
      );
    }
  }

  setDynamicMaskForPhone() {
    this.registerForm.controls.phone.valueChanges.subscribe(value => {
      this.phoneMask = (value.length < 11) ? "(00) 0000-00009" : "(00) 00000-0000";
    });
  }
}
