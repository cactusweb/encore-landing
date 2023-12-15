import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

enum CardStates {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

@Component({
  selector: 'enc-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('CardContent', [
      state(
        CardStates.COLLAPSED,
        style({
          height: '0px',
          padding: '0px',
        })
      ),
      state(
        CardStates.EXPANDED,
        style({
          height: '*',
          padding: '*',
        })
      ),
      transition(
        `${CardStates.COLLAPSED} <=> ${CardStates.EXPANDED}`,
        animate('0.2s')
      ),
    ]),
  ],
})
export class FaqCardComponent {
  @Input()
  question!: string;

  @Input()
  answer!: string;

  cardState: CardStates = CardStates.COLLAPSED;

  readonly CardStates = CardStates;

  changeState() {
    if (this.cardState === CardStates.COLLAPSED) {
      this.cardState = CardStates.EXPANDED;
    } else {
      this.cardState = CardStates.COLLAPSED;
    }
  }
}
