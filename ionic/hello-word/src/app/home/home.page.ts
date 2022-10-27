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
      host: 'norte'
    },
    {
      id: 2,
      title: 'NORDESTE',
      host: 'nordeste'
    },
    {
      id: 3,
      title: 'NOROESTE',
      host: 'noroeste'
    },
    {
      id: 4,
      title: 'SUL',
      host: 'sul'
    },
    {
      id: 5,
      title: 'SULDESTE',
      host: 'suldeste'
    },
    {
      id: 6,
      title: 'SULDOESTE',
      host: 'suldoeste'
    },
    {
      id: 7,
      title: 'LESTE',
      host: 'leste'
    },
    {
      id: 8,
      title: 'OESTE',
      host: 'oeste'
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
