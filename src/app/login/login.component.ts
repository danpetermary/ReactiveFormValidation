import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControlDirective, Validators, FormGroupDirective } from '@angular/forms';
import { Loginuser } from './mylogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
  loginobj : Loginuser;

//  @ViewChild(FormGroupDirective, ' ')
  //   frmgrpdr : FormGroupDirective;

  constructor(private formBuilder : FormBuilder) {
    this.loginform=this.formBuilder.group({
         email : ['my@Acdef.com',Validators.compose([Validators.required,Validators.minLength(6)])],
         password : ['password',Validators.compose([Validators.required,Validators.minLength(6)])]
         })
          this.loginobj    = new Loginuser();  

   }

  ngOnInit() {
    
  }
   validate(fmy : FormGroup) : void
   {
  console.log(fmy.value) ;  
  this.loginobj=fmy.value;
  //fmy.reset();
  //this.frmgrpdr.resetForm();
   }
}
