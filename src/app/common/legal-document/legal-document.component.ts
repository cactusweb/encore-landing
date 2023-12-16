import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'enc-legal-document',
  template: `
    <enc-nav />
    <ng-content />
  `,
  styles: [
    `
      :host {
        @apply tw-grid tw-gap-10 md:tw-gap-6 tw-pt-10 md:tw-pt-6 tw-px-20 lg:tw-px-10 md:tw-px-4;
      }
    `,
  ],
  imports: [CommonModule, NavComponent, FooterComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalDocumentComponent {}
