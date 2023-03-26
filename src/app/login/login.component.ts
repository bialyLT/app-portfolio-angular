import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup | any;

  constructor(private fb: FormBuilder, private router : Router) { 
  }

  onSubmit() {
//no funciona
    this.router.navigate(['/admin']);
  }
  
  ngOnInit(): void {

    this.user = this.fb.group({

      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(4)]],

    });
  }

}
