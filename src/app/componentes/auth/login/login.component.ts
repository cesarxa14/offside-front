import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../../servicios/authService/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AppServiceService} from '../../../servicios/appService/app-service.service';
import { Router} from '@angular/router';

// import {} from ''

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidForm:boolean;
  constructor(private _formBuilder : FormBuilder,
              private appService: AppServiceService, 
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this._builderForm();
  }

  _builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
     /**Getters */
     get usuario() { return this.loginForm.controls['usuario']; }
     get password() { return this.loginForm.controls['password']; }

  login(){
  
    this.appService.login(this.loginForm.value).subscribe((res:any)=>{
      // if(res.status == 1 || res.status == 400) return;
      if(res.msj) this._snackBar.open(res.msj, 'Cerrar', {duration:4000});
      console.log(res)
      if(res.status == 0){
        localStorage.setItem('token', res.token);
        localStorage.setItem('metadata', res.metadata);
        this.appService.metadata.next(res.metadata);      
        this.router.navigateByUrl('/dashboard');
      } else if(res.status != 0){
        
      }
      
    }, err =>{
      // console.log(err)
    })
  }

}
