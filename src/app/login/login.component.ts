import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  heroForm!: FormGroup;
  [x: string]: any;
  usuario: any;
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.usuario.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.usuario.alterEgo),
      contra: new FormControl(this.usuario.contra, Validators.required)
    });
  
  }
  
  get name() { return this.heroForm.get('name'); }
  
  get power() { return this.heroForm.get('power'); }

}
function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function no implementada.');
}

