import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { CommonModule } from '@angular/common';
import { FAQS, Faq } from './consts/consts';

@Component({
  selector: 'enc-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FaqCardComponent],
})
export class FaqComponent {
  readonly FAQS = FAQS;
  
  trackByProperty(_: number, item: Faq) {
    return item.answer;
  }
}