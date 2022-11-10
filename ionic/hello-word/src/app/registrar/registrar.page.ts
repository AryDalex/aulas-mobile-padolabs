import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.page.html',
    styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

    public userName: String = undefined;
    public userEmail: String = undefined;
    public userPassword: String = undefined;
    public userUf: String = undefined;
    public userCity: String = undefined;

    constructor(private router: Router, private UserService: UserService) { }

    ngOnInit() {
    }

    onSubmit() {
        const data = {
            userName: this.userName,
            userEmail: this.userEmail,
            userPassword: this.userPassword,
            userUf: this.userUf,
            userCity: this.userCity,
        }

        this.UserService.userLogin(data).subscribe( data => {
            this.router.navigate(['/login']);
        })
    }

    goToPage() {
        this.router.navigate(['/login']);
    }

}
