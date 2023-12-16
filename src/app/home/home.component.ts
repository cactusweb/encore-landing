import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../common/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DsImageComponent } from './components/ds-image/ds-image.component';
import { FeatureComponent } from './components/features/features.component';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'enc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    HeaderComponent,
    DsImageComponent,
    FeatureComponent,
    FaqComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
