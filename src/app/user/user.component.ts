import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: '<p>user works!</p>'
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.decideRoute();
  }

  decideRoute() {
    console.log('decideRoute success');
    this.router.navigate(['user/login']);
  }

}
