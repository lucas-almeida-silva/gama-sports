import { AbstractControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export default class Validations {
  static validateCpf(control: AbstractControl) {
    if(control.value.length) {
      const cpf = control.value.replace(/[^\d]/g, "");

      let sum: number = 0;
      let remainder: number;
      let equalDigits: boolean = true;

      const regex = new RegExp('[0-9]{11}');

      if(!regex.test(cpf))
        return { invalidCpf: true };

      for (let i = 0; i < cpf.length - 2; i++) {
        if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
          equalDigits = false;
          break;
        }
      }

      if(equalDigits)
        return { invalidCpf: true };

      for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        remainder = (sum * 10) % 11;

      if (remainder == 10 || remainder == 11) 
        remainder = 0;

      if (remainder != parseInt(cpf.substring(9, 10))) 
        return { invalidCpf: true };

      sum = 0;
      for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      
      remainder = (sum * 10) % 11;

      if (remainder == 10 || remainder == 11) 
        remainder = 0;

      if (remainder != parseInt(cpf.substring(10, 11)))
        return { invalidCpf: true }

      return null;
    }
  }

  static passwordsMatch(passwordControlName: string, confirmPasswordControlName: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.get(passwordControlName);
      let confirmPasswordControl = formGroup.get(confirmPasswordControlName);

      if(confirmPasswordControl.value) {
        if (passwordControl.value !== confirmPasswordControl.value) 
          confirmPasswordControl.setErrors({ passwordMismatch: true })
        else
        confirmPasswordControl.setErrors(null)
      }
    }
  }

  static validateDate(dateControl: AbstractControl) {
    const date = dateControl.value;

    if(date) {
      if(!(date.length === 10)) 
        return { invalidDate: true};
      
      if(!moment(date, 'DD/MM/YYYY').isValid())
        return { invalidDate: true};
    }
    console.log(date)
    return null;
  } 
}
