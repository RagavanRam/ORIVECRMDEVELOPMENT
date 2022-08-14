import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavbarService } from 'src/app/private/services/navbar.service';

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.css']
})
export class LargeComponent implements OnInit, OnDestroy {
  option: string | undefined;
  navServiceSub: Subscription | undefined;

  constructor(private navService: NavbarService) {}

  ngOnInit(): void {
    this.navServiceSub = this.navService.option.subscribe(res => {
      this.option = res;
    })
  }

  ngOnDestroy(): void {
    if (this.navServiceSub) {
      this.navServiceSub.unsubscribe();
    }
  }

}
