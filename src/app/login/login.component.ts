import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  constructor(private router:Router, private fb:FormBuilder) { 
    this.loginform= this.fb.group({
      email:['',Validators.required],
      password : ['',Validators.required]
    })
  }
   ngOnInit() {
   
  }

    dashboard(){
    this.router.navigate(['/dashboard']); 
    }
    registration(){
      this.router.navigate(['/registration']);
    }
}
