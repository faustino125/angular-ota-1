import { Component, OnInit, Input, ViewChild, ElementRef, Self, Optional, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl,ValidatorFn, Validators, NG_VALIDATORS, NgControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements ControlValueAccessor, Validator, OnInit {
@ViewChild('input') input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input('requerido') requerido: boolean = false;
  @Input('etiqueta') etiqueta: string = null;
  @Input('inputPlaceholder') placeholder: string;
  @Input('error') error: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.requerido) {
      validators.push(Validators.required);
    } 

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    if (this.requerido) {
      validators.push(Validators.required);
    }

    return validators;
  }


}

