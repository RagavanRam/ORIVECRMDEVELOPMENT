import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavbarService } from 'src/app/private/services/navbar.service';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
  styleUrls: ['./compact.component.css']
})
export class CompactComponent implements OnInit, OnDestroy {
  // local state
  option: string | undefined;
  navOptionSub: Subscription | undefined;

  constructor(private router: Router, private navService: NavbarService) {}

  ngOnInit(): void {
    this.navOptionSub = this.navService.option.subscribe(
      res => {
        this.option = res;
      }
    )

    let url = this.router.url.split('/')[1]
    this.changeNav(url);
  }

  changeNav(value: string) {
    this.navService.setOption(value);
  }

  onNavCloseClick() {
    this.navService.toggleNav(true)
  }

  ngOnDestroy(): void {
    if (this.navOptionSub) {
      this.navOptionSub.unsubscribe()
    }
  }
}
