import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Encore',
  },
  {
    path: 'user_agreement',
    title: 'User agreement - Encore',
    loadComponent: () =>
      import('./user-agreement/user-agreement.component').then(
        (c) => c.UserAgreementComponent
      ),
  },
  {
    path: 'privacy',
    title: 'Privacy policy - Encore',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent
      ),
  },
  {
    path: 'refund_dispute',
    title: 'Refund and dispute policy - Encore',
    loadComponent: () =>
      import('./refund-dispute/refund-dispute.component').then(
        (c) => c.RefuncDisputeComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    FooterComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
