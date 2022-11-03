import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {

    cidades: object;
    regiao: string;

    constructor(
        private router: Router, 
        private cidadesService: CidadesService
    ) {
        this.cidades = [];
        this.regiao = '';
    }

    goToPageCity(cidade) {
        console.log(cidade);
        this.router.navigate(['/cidade'], { state: { dados: cidade } });
    }

    ngOnInit() {
        this.regiao = history.state.dados;

        console.log(history.state);

        this.cidadesService.getCitiesByRegion(this.regiao).subscribe(data => {
            this.cidades = data;
            console.log(this.cidades);
        })
    }

    goToPage(url) {
        console.log(url);
        this.router.navigate(['/' + url]);
    }

}
