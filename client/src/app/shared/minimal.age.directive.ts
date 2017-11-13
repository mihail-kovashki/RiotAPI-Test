import {
  Directive, ElementRef, forwardRef, HostListener, Input, OnChanges, Renderer,
  SimpleChanges
} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[minAge]',
  exportAs: 'minAge'
})
export class MinimalAgeDirective implements Validator {
  @Input() minAge: number;
  @Input() myInput: string;
  private valid: boolean;

  constructor(private el: ElementRef) {

  }

  validate(c: AbstractControl): ValidationErrors | any {
    return {
      minAge: this.valid
    };
  }

  @HostListener('change') onChange() {
    if(Number(this.myInput) < this.minAge) {
      this.valid = false;
    }

    this.valid = true;
  }
}
