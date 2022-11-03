import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public name: String = undefined;
  public email: String = undefined;
  public password: String = undefined;
  public uf: String = undefined;
  public city: String = undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        uf: this.uf,
        city: this.city,
    }

    this.UserService.userLogin(data).subscribe( data => {
        this.router.navigate(['/home']);
    })
}

  goToPage(host) {
    this.router.navigate(['/' + host]);
  }

}
