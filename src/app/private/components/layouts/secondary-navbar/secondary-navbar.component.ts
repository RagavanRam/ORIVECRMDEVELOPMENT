import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavbarService } from 'src/app/private/services/navbar.service';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.css']
})
export class SecondaryNavbarComponent implements OnInit, OnDestroy {
  // local state variables
  isCollapsed: boolean | undefined;
  collapsed: boolean = true;
  navServiceSub: Subscription | undefined

  constructor(private navService: NavbarService) { }

  ngOnInit(): void {
    this.navServiceSub = this.navService.toggleState.subscribe((res: boolean) => {
      this.isCollapsed = res;
    })
  }

  changeNavState() {
    this.isCollapsed = !this.isCollapsed;
    this.navService.toggleNav(this.isCollapsed);
  }

  ngOnDestroy(): void {
    if (this.navServiceSub) {
      this.navServiceSub.unsubscribe();
    }
  }

}
