import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public userEmail: String = undefined;
    public userPassword: String = undefined;

    constructor(private router: Router, private UserService: UserService) { }

    ngOnInit() {
    }

    onSubmit() {
        const data = {
            userEmail: this.userEmail,
            userPassword: this.userPassword,
        }

        this.UserService.userLogin(data).subscribe( data => {
            this.router.navigate(['/home']);
        })
    }

    goToPage() {
        this.router.navigate(['/registrar']);
    }

}
