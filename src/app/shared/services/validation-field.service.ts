import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationFieldService {

  constructor() { }

  hasError(control: AbstractControl, errorName: string): boolean {
    return ((control.dirty || control.touched) && control.hasError(errorName));
  }

  lengthValidate(control: AbstractControl, errorName: string) {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
