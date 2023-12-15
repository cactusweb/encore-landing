import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'enc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
