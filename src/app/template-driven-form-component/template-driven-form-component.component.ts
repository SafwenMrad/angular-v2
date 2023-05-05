import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent {
  form: FormGroup;
  showCode = false;
  code: string = '';


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      typeCarte: ['', Validators.required],
      numeroCarte: ['', Validators.required],
      dateExpiration: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  checkPaymentValidity() {
    const paymentFields = ['typeCarte', 'numeroCarte', 'dateExpiration'];
    for (const field of paymentFields) {
      if (this.form?.get(field)?.invalid) {
        console.log(field, "is invalid");
        this.showCode = false;
        return;
      }
    }
    console.log("all payment fields are valid");
    this.showCode = true;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
