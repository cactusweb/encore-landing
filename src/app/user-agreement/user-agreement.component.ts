import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalDocumentComponent } from '../common/legal-document/legal-document.component';

@Component({
  selector: 'enc-user-agreement',
  templateUrl: './user-agreement.component.html',
  styleUrls: ['./user-agreement.component.scss'],
  imports: [LegalDocumentComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAgreementComponent {}
