import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private data: Interface[] = [{
      id: 1,
      title: 'NORTE',
      host: 'cidades'
    },
    {
      id: 2,
      title: 'NOROESTE',
      host: 'cidades'
    },
    {
      id: 3,
      title: 'OESTE',
      host: 'cidades'
    },
    {
      id: 4,
      title: 'CENTRO SUL',
      host: 'cidades'
    },
    {
      id: 5,
      title: 'CAMPOS GERAIS',
      host: 'cidades'
    },
    {
      id: 6,
      title: 'LESTE',
      host: 'cidades',
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
  title: string;
  host: string;
}
