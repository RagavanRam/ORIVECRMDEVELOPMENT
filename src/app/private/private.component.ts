import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NavbarService } from './services/navbar.service';

import { Utils } from './utils/utils';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit, OnDestroy {
  // local state variables
  navState: boolean | undefined;
  navServiceSub: Subscription | undefined;

  constructor(private router: Router, private navService: NavbarService) {}

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.updateSidebar();
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      if (Utils.isMobile()) {
        this.navService.toggleNav(true);
      }
    });

    this.navServiceSub = this.navService.toggleState.subscribe(res => {
      this.navState = res;
    })

    this.updateSidebar();

  }

  updateSidebar() {
    Utils.isMobile() ? this.navState = true: this.navState = false;
    this.navService.toggleNav(this.navState);
  }

  ngOnDestroy(): void {
    if(this.navServiceSub) {
      this.navServiceSub.unsubscribe();
    }
  }
}
