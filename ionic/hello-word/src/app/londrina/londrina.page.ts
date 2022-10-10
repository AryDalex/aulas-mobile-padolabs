import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-londrina',
  templateUrl: './londrina.page.html',
  styleUrls: ['./londrina.page.scss'],
})
export class LondrinaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPageHome(host) {
    this.router.navigate(['/' + host]);
  }

}
