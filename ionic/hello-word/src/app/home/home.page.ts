import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private title: string = ''; // string de pesquisa
  private data: Interface[] = [{
      id: 1,
      imageUrl: 'assets/londrina.png',
      title: 'LONDRINA, PR',
      subtitle: 'DESTINO',
      p: 'Londrina é um município brasileiro localizado no estado do Paraná, na Região Sul do Brasil, distando 381 km da capital paranaense, Curitiba. É considerada pela CGU a cidade mais transparente do Paraná.',
      button: 'VISUALIZAR CIDADE',
      host: '/londrina'
    },
    {
      id: 2,
      imageUrl: 'assets/curitiba.png',
      title: 'CURITIBA, PR',
      subtitle: 'DESTINO',
      p: 'Curitiba é a capital do estado do Paraná, na região sul do Brasil. A Torre Panorâmica, que tem um observatório em sua parte superior, destaca-se na silhueta da cidade.',
      button: 'VISUALIZAR CIDADE',
      host: '/curitiba'
    },
    {
      id: 3,
      imageUrl: 'assets/maringa.png',
      title: 'MARINGÁ, PR',
      subtitle: 'DESTINO',
      p: 'Maringá é um município brasileiro do estado do Paraná, sendo uma cidade média-grande planejada e de urbanização recente.',
      button: 'VISUALIZAR CIDADE',
      host: '/maringa'
    },
  ];

  constructor(private router: Router) { }

  // GETTERS AND SETTERS
  protected getTitle() {
    return this.title;
  }

  protected setTitle(event: any) {
    // console.log(event.target.value)
    this.title = event.target.value;
  }

  protected getData(): Interface[] {
    return this.data;
  }

  goToPage(host) {
    this.router.navigate(['/' + host]);
  }

  // Cidades: object;

  // constructor(private router: Router, private CidadesService: CidadesService) {
  //   this.Cidades = [];
  // }

  // ngOnInit() {
  //   this.CidadesService.BuscarCidades().subscribe(data => {
  //     console.log(data);
  //     this.Cidades = data;
  //   })
  // }

  // goToPage(Cidade) {
  //   console.log(Cidade);
  //   this.router.navigate(['/cidade'], {state: { date: Cidade }});
  // }

}

interface Interface {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  p: string;
  button: string;
  host: string;
}
