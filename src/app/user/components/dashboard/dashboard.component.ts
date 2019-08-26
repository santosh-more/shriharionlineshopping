import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  abc: unknown;
  bb: any;

  constructor(private router: Router) {
    console.log('DashboardComponent works!!');
  }

  ngOnInit() {
  }

}
