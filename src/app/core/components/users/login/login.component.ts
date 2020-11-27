import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';
import { AuthService } from 'src/app/core/services/auth.service';
import Login from 'src/app/shared/models/Login';
import LoggedUser from 'src/app/shared/models/LoggedUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  returnURL: string;

  constructor(
    private formBuilder: FormBuilder, 
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public validationFieldService: ValidationFieldService,

    private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForm();

    this.returnURL = this.activatedRoute.snapshot.queryParams.returnURL;
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loginForm.markAllAsTouched();

    if(this.loginForm.valid) {
      const login = this.loginForm.value as Login;

      this.authService.login(login).subscribe(
        (loggedUser) => {
          localStorage.setItem("user", JSON.stringify(loggedUser));

          if(this.returnURL) {
            this.router.navigateByUrl(this.returnURL);
          } else {
            this.router.navigateByUrl('/');
          }
        },
        (error) => {
          if(error.error.message) {
            this.toastrService.error(error.error.message);
          } else {
            this.toastrService.error('Ocorreu um erro ao fazer o login');
          }
        }

      );
    }

  }
}
