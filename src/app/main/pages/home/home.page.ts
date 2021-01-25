import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './home.page.html',
  styleUrls: [
    './home.page.scss'
  ]
})
export class HomePage implements OnInit {
  title = 'payment-test';

  constructor() {
  }

  ngOnInit(): void {
  }
}
