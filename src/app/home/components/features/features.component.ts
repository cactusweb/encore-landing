import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FEATURES, Feature } from './consts/consts';

@Component({
  selector: 'enc-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent {
  readonly FEATURES = FEATURES;

  readonly imgUrl = '/assets/home/features/';

  trackByProperty(_: number, item: Feature) {
    return item.title;
  }
}
