import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: String = undefined;
  public password: String = undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   const data = {
  //     email: this.email,
  //     password: this.password,
  //   }

  //   this.UserService.userLogin(data).subscribe( data => {

  //   })
  // }

  goToPage(host) {
    this.router.navigate(['/' + host]);
  }

}
