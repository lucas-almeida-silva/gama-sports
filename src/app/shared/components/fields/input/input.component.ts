import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationFieldService } from '../../../services/validation-field.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() type: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() controlName: string;
  @Input() icon: string;
  @Output() onClickIcon = new EventEmitter();

  constructor(public validationFieldService: ValidationFieldService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
