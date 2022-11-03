import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email: String = undefined;
    public password: String = undefined;

    constructor(private router: Router, private UserService: UserService) { }

    ngOnInit() {
    }

    onSubmit() {
        const data = {
            email: this.email,
            password: this.password,
        }

        this.UserService.userLogin(data).subscribe( data => {
            this.router.navigate(['/home']);
        })
    }

    goToPage() {
        this.router.navigate(['/registrar']);
    }

}
