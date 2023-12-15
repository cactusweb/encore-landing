import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'enc-ds-image',
  template: `
    <section>
      <img
        src="/assets/home/main.png"
        alt="Encore has discord server for support"
        [style.width]="imgWidth"
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
        @apply tw-relative tw-bottom-[13vh];
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

  readonly minwidth = 80;
  readonly maxWidth = 95;

  constructor(private cdr: ChangeDetectorRef) {}

  get imgWidth() {
    const boundingRect = this.img?.nativeElement.getBoundingClientRect();

    if (!boundingRect) {
      return this.minwidth;
    }

    let width!: number;
    if (boundingRect.top < 90) {
      width = this.maxWidth;
    } else if (boundingRect.top > 0) {
      width = this.maxWidth - boundingRect.top / 70;
    }
    return (width < this.minwidth ? this.minwidth : width) + '%';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
