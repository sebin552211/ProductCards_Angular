// import { NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   imports: [FormsModule, NgIf,ReactiveFormsModule]
// })
// export class LoginComponent {
//     constructor(private router: Router){}
  
//     GoToLogin(){
//       this.router.navigate(['/'])
//     }

//     //Reactive forms
//     loginForm!: FormGroup
   
//     ngOnInit(): void {
   
//       this.loginForm = new FormGroup(
//         {
//           email: new FormControl('',[Validators.required,Validators.email]),
//           password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])
//         }
//       )
   
//     }
  
//     onSubmit(){
//       console.log(this.loginForm.value);
//     }
  
//   }



import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, ReactiveFormsModule,CommonModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  passwordErrors = [
    { errorKey: 'minlength', message: 'Minimum 6 characters' },
    { errorKey: 'maxlength', message: 'Maximum 20 characters' },
    { errorKey: 'uppercase', message: 'At least one uppercase letter' },
    { errorKey: 'lowercase', message: 'At least one lowercase letter' },
    { errorKey: 'number', message: 'At least one number' },
    { errorKey: 'specialCharacter', message: 'At least one special character' },
    { errorKey: 'noSpaces', message: 'No spaces allowed' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        this.passwordValidator,
      ]),
    });
  }

  passwordValidator(control: FormControl): ValidationErrors | null {
    const value = control.value || '';
    const errors: any = {};
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const noSpacesRegex = /^\S*$/;

    if (value.length < 6) {
      errors['minlength'] = true;
    }
    if (value.length > 20) {
      errors['maxlength'] = true;
    }
    if (!uppercaseRegex.test(value)) {
      errors['uppercase'] = true;
    }
    if (!lowercaseRegex.test(value)) {
      errors['lowercase'] = true;
    }
    if (!numberRegex.test(value)) {
      errors['number'] = true;
    }
    if (!specialCharacterRegex.test(value)) {
      errors['specialCharacter'] = true;
    }
    if (!noSpacesRegex.test(value)) {
      errors['noSpaces'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.GoToLogin();
    }
  }

  GoToLogin() {
    this.router.navigate(['/']);
  }
}


 