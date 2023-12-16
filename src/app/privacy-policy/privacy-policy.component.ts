import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalDocumentComponent } from '../common/legal-document/legal-document.component';

@Component({
  selector: 'enc-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  standalone: true,
  imports: [LegalDocumentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {}
