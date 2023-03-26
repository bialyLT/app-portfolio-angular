import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup | any;

  constructor(

      private fb: FormBuilder,
      private router : Router,
      private authService: AuthService
     
     ) { 
  }

  onSubmit() {

      if (this.authService.login(this.user.controls.username.value, this.user.controls.password.value)) {

        this.router.navigate(['/admin']);
      
      } else {
        
        alert("el usuario o la contraseña son incorrectos");

      }


  }
  
  ngOnInit(): void {

    this.user = this.fb.group({

      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

}
