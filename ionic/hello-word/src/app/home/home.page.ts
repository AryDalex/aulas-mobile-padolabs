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
      title: 'Norte',
      host: 'cidades'
    },
    {
      id: 2,
      title: 'Nordeste',
      host: 'cidades'
    },
    {
      id: 3,
      title: 'Centro-Oeste',
      host: 'cidades'
    },
    {
      id: 4,
      title: 'Suldeste',
      host: 'cidades'
    },
    {
      id: 5,
      title: 'Sul',
      host: 'cidades'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  protected getData(): Interface[] {
    return this.data;
  }

    goToPageCity(cidade) {
        console.log(cidade);
        this.router.navigate(['/cidades'], { state: { dados: cidade } });
    }

    goToPage(url) {
        console.log(url);
        this.router.navigate(['/' + url]);
    }

}

interface Interface {
  id: number;
  title: string;
  host: string;
}
