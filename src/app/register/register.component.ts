import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { user } from './registeruser';
import {NgModel} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Fruits : Array<string>
  signupform: NgForm; 

  userobj : user;

  constructor() {
    this.userobj=new user();
    this.Fruits = ["apple","mango","organe"]
  }

  ngOnInit() {
  }

  mysign(myform : NgForm) : void
  {
console.log(myform.value);
this.userobj=myform.value;
myform.reset();
  }
}
