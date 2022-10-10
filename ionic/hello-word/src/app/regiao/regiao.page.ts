import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.page.html',
  styleUrls: ['./regiao.page.scss'],
})
export class RegiaoPage implements OnInit {

  private data: Interface[] = [{
      id: 1,
      imageUrl: 'assets/regiao.png',
      title: 'NORTE',
      host: '/norte'
    },
    {
      id: 2,
      imageUrl: 'assets/regiao.png',
      title: 'NORDESTE',
      host: '/nordeste'
    },
    {
      id: 3,
      imageUrl: 'assets/regiao.png',
      title: 'CESTRO-OESTE',
      host: '/centrooeste'
    },
    {
      id: 4,
      imageUrl: 'assets/regiao.png',
      title: 'SUL',
      host: '/sul'
    },
    {
      id: 5,
      imageUrl: 'assets/regiao.png',
      title: 'SULDESTE',
      host: '/suldeste'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  protected getData(): Interface[] {
    return this.data;
  }

  goToPage(host) {
    this.router.navigate(['/' + host]);
  }

}

interface Interface {
  id: number;
  imageUrl: string;
  title: string;
  host: string;
}
