import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  // Behavior Subjects
  option = new BehaviorSubject<string>('dashboard');
  toggleState = new BehaviorSubject<boolean>(true)

  constructor() { }

  setOption(value: string) {
    // change the nav option for primary navbar(sideNavbar)
    this.option.next(value);
  }

  toggleNav(value: boolean) {
    this.toggleState.next(value);
  }
}
