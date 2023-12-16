import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalDocumentComponent } from '../common/legal-document/legal-document.component';

@Component({
    selector: 'enc-refund-dispute',
    templateUrl: './refund-dispute.component.html',
    imports: [LegalDocumentComponent],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefuncDisputeComponent {}
