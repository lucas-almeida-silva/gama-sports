import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFieldService } from 'src/app/shared/services/validation-field.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder, 
    public validationFieldService: ValidationFieldService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

}
