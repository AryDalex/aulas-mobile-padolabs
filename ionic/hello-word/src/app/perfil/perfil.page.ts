import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private data: InterfaceDados[] = [{
    id: 1,
    title: 'Nome',
    dados: 'Arielly Oliveira',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 2,
    title: 'Idioma',
    dados: 'Português(Brasil)',
    host: '/',
    keyName: 'chevron-forward-outline'
  }
];

private value: InterfaceConfig[] = [{
  id: 1,
  keyName: 'settings-outline',
  title: 'Configurações do sistema',
  host: '/',
  DoKeyName: 'chevron-forward-outline'
},
{
  id: 2,
  keyName: 'help-circle-outline',
  title: 'Ajuda',
  host: '/ajuda',
  DoKeyName: 'chevron-forward-outline'
},
{
  id: 3,
  keyName: 'notifications-outline',
  title: 'Notificações',
  host: '/',
  DoKeyName: 'chevron-forward-outline'
}
];

constructor(private router: Router) { }

ngOnInit() {
}

protected getData(): InterfaceDados[] {
  return this.data;
}

protected getValue(): InterfaceConfig[] {
  return this.value;
}

goToPage(host) {
  this.router.navigate(['/' + host]);
}

}

interface InterfaceDados {
  id: number;
  title: string;
  dados: string;
  host: string;
  keyName: String;
}

interface InterfaceConfig {
  id: number;
  keyName: string;
  title: string;
  host: string;
  DoKeyName: String;
}

