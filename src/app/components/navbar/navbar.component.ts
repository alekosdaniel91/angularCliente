import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public app_name = 'Formulario';
  public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logoutUser();
    location.reload();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
