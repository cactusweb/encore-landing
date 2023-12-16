import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule, Location, isPlatformServer } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, debounceTime, filter, takeUntil, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

enum MenuStates {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

@Component({
  selector: 'enc-nav',
  templateUrl: `./nav.component.html`,
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('CanBeExpand', [
      state(
        MenuStates.COLLAPSED,
        style({
          height: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
        })
      ),
      state(
        MenuStates.EXPANDED,
        style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
        })
      ),
      transition(
        `${MenuStates.COLLAPSED} <=> ${MenuStates.EXPANDED}`,
        animate('0.2s')
      ),
    ]),
  ],
})
export class NavComponent implements OnDestroy, AfterContentInit {
  readonly dashboardLink = environment.dashURL;

  readonly MenuStates = MenuStates;

  readonly homeLinks = ['Features', 'FAQ', 'Contacts'];

  state = MenuStates.COLLAPSED;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  get isMenuVisible() {
    if (isPlatformServer(this.platformId) || window.innerWidth > 768) {
      return true;
    }
    return this.state === MenuStates.EXPANDED;
  }

  ngAfterContentInit(): void {
    this.scrollTo();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  changeState() {
    if (this.state === MenuStates.COLLAPSED) {
      this.state = MenuStates.EXPANDED;
      document.body.style.overflow = 'hidden';
    } else {
      this.state = MenuStates.COLLAPSED;
      document.body.style.overflow = 'auto';
    }
  }

  onClickToLink(blockId: string, event: Event) {
    event.preventDefault();
    this.router.navigate(['/'], { fragment: blockId.toLowerCase() });
  }

  private scrollTo() {
    this.activedRoute.fragment
      .pipe(
        takeUntil(this.destroyed$),
        filter((res) => !!res),
        tap(() => {
          this.location.replaceState('/');
        }),
        debounceTime(100)
      )
      .subscribe((res) => {
        document.querySelector(`#${res!}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
  }
}
