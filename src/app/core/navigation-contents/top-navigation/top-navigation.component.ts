import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { AuthService } from 'src/app/feature/dashboard/auth/auth.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent {

  isLoggedIn: boolean = this._auth.isLoggedIn();

  constructor(private _sideBarService: SidebarService, public _auth: AuthService) { }

  toggleSidebar() {
    this._sideBarService.toggle();
  }

}
