import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.page.html',
  styleUrls: ['./cidade.page.scss'],
})
export class CidadePage implements OnInit {

    Cidade: object;

    constructor(private router: Router) {
        this.Cidade = [];
     }

    ngOnInit() {
        this.Cidade = history.state.dados;
        console.log(this.Cidade);
    }

    goToPageCity(cidade) {
        console.log(cidade);
        this.router.navigate(['/cidade'], { state: { dados: cidade } });
    }

    goToPage(url) {
        console.log(url);
        this.router.navigate(['/' + url]);
    }

}