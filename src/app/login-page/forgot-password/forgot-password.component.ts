import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  LoginForm:FormGroup;
  submitted=false;

  constructor(private FormBuilder:FormBuilder, 
    private router:Router){
    this.LoginForm = this.FormBuilder.group({
      Password:['', Validators.required],
      CurrentPassword:['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  get f(){
    return this.LoginForm.controls
  }
  LogIn(){
    this.submitted = true;
    if(this.LoginForm.valid){
      this.router.navigate(['login'])
  
    }
  }
}
