import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm:FormGroup;
  submitted=false;

  constructor(private FormBuilder:FormBuilder, 
    private router:Router){
    this.LoginForm = this.FormBuilder.group({
      email:['', Validators.required],
      Password:['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  get f(){
    return this.LoginForm.controls
  }
  submit(){
    this.submitted = true;
    if(this.LoginForm.valid){
      this.router.navigate(['home'])
  
    }
  }
}
