import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  LoginForm:FormGroup;
  submitted=false;

  constructor(private FormBuilder:FormBuilder, 
    private router:Router){
    this.LoginForm = this.FormBuilder.group({
      Fname:['', Validators.required],
      Pnumber:['', Validators.required],
      email:['', Validators.required],
      Password:['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  get f(){
    return this.LoginForm.controls;
  }
  SignUp(){
    this.submitted = true;
    if(this.LoginForm.valid){
      this.router.navigate(['home']);
  
    }
}
}
