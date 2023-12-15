import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

enum MenuStates {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

@Component({
  selector: 'enc-nav',
  templateUrl: `./nav.component.html`,
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('CanBeExpand', [
      state(
        MenuStates.COLLAPSED,
        style({
          height: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
        })
      ),
      state(
        MenuStates.EXPANDED,
        style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
        })
      ),
      transition(
        `${MenuStates.COLLAPSED} <=> ${MenuStates.EXPANDED}`,
        animate('0.2s')
      ),
    ]),
  ],
})
export class NavComponent {
  readonly dashboardLink = environment.dashURL;

  readonly MenuStates = MenuStates;

  _state = MenuStates.COLLAPSED;

  get state() {
    if (window.innerWidth > 768) {
      return MenuStates.EXPANDED;
    }
    return this._state;
  }

  changeState() {
    if (this._state === MenuStates.COLLAPSED) {
      this._state = MenuStates.EXPANDED;
      document.body.style.overflow = 'hidden';
    } else {
      this._state = MenuStates.COLLAPSED;
      document.body.style.overflow = 'auto';
    }
  }
}
