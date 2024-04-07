import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) { }
  userRole = localStorage.getItem('userRole')
  userName = localStorage.getItem('userName')
  logOut() {
    this._AuthService.myLogout()
  }
  ngOnInit(): void {

  }
}
