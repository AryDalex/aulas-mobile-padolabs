import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  private data: Interface[] = [{
    id: 1,
    p: 'Como conectar com a alexa?',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 2,
    p: 'Manual de instalação',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 3,
    p: 'Minha fechadura não abre remotamente',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 4,
    p: 'Como abrir a fechadura remotamente?',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 5,
    p: 'Como adicionar uma nova EKEY?',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 6,
    p: 'Como adicionar um novo CARTÃO?',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 7,
    p: 'Meu cartão não abre a fechadura',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 8,
    p: 'O que é um GATEWAY?',
    host: '/',
    keyName: 'chevron-forward-outline'
  },
  {
    id: 9,
    p: 'Como trocar o nome da minha fechadura?',
    host: '/',
    keyName: 'chevron-forward-outline'
  }
];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(host) {
    this.router.navigate(['/' + host]);
  }

  protected getData(): Interface[] {
    return this.data;
  }

}

interface Interface {
  id: number;
  p: string;
  host: string;
  keyName: String;
}
