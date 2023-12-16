import { CommonModule, isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'enc-ds-image',
  template: `
    <section>
      <img
        src="/assets/home/main.png"
        alt="Encore has discord server for support"
        [style.transform]="'scale(' + imgWidth + ')'"
        #img
      />
    </section>
  `,
  styles: [
    `
      section {
        @apply tw-grid tw-justify-items-center;
      }
      img {
        @apply tw-relative tw-bottom-[13vh] tw-w-[80%] tw-origin-bottom md:tw-bottom-[8vh] md:tw-w-full;
        transition: 0.1s;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsImageComponent implements AfterViewInit {
  @ViewChild('img')
  img!: ElementRef<HTMLImageElement>;

  readonly minScale = 1;
  readonly maxScale = 1.15;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get imgWidth() {
    if (isPlatformServer(this.platformId) || window.innerWidth < 768) {
      return 1;
    }

    const boundingRect = this.img?.nativeElement.getBoundingClientRect();

    if (!boundingRect || window.scrollY < 70) {
      return this.minScale;
    }

    let scale!: number;
    if (boundingRect.top < 170) {
      scale = this.maxScale;
    } else if (boundingRect.top > 0) {
      scale =
        this.minScale +
        (this.maxScale - this.minScale) / (boundingRect.top / 170);
    }
    return scale < this.minScale ? this.minScale : scale;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
