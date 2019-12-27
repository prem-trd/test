import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  adduserform: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.adduserform = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required, Validators],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      });
  }
  onSubmit() {
   
  }
  login(){
    this.router.navigate(['/login']);
  }
}
