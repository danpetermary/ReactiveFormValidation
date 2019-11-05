import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../login/mylogin';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  userobj : Loginuser;

  constructor() {

    this.userobj =new Loginuser();
   }

  ngOnInit() {
  }

}
