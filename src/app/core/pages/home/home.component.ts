import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
  effect,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeComponent implements AfterViewInit {
  @Input() swiperContainerId = '';
  // index = 0;
  slidePerView = 1;

  // @ContentChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  @ViewChild('swiper', { static: false }) swiperRef!: ElementRef<SwiperContainer>;

  // initialized = false;

  // Array of images for the slider
  images = [
    { src: 'assets/images/image1.webp', alt: 'Image 1 description' },
    { src: 'assets/images/image2.webp', alt: 'Image 2 description' },
    { src: 'assets/images/image3.webp', alt: 'Image 3 description' },
    { src: 'assets/images/image4.webp', alt: 'Image 4 description' },
  ];

  constructor() {}

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     const shadowRoot = document
  //       .getElementById(this.swiperContainerId)
  //       ?.getElementsByClassName('swiper')[0]?.shadowRoot
  //       ?.firstChild as HTMLElement;
  //     shadowRoot.style.paddingBottom = '35px';
  //   }, 300);
  // }

  // changeSlide(prevOrNext: number): void {
  //   if (prevOrNext === -1) {
  //     this.swiperRef.nativeElement.swiper.slidePrev();
  //   } else {
  //     this.swiperRef.nativeElement.swiper.slideNext();
  //   }
  // }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const shadowRoot = document
        .getElementById(this.swiperContainerId)
        ?.getElementsByClassName('swiper')[0]?.shadowRoot
        ?.firstChild as HTMLElement;
      if (shadowRoot) {
        shadowRoot.style.paddingBottom = '35px';
      }
    }, 300);
  }

  // changeSlide(prevOrNext: number): void {
  //   if (!this.swiperRef) {
  //     console.error('Swiper reference is not defined.');
  //     return;
  //   }

  //   if (prevOrNext === -1) {
  //     this.swiperRef.nativeElement.swiper.slidePrev();
  //   } else {
  //     this.swiperRef.nativeElement.swiper.slideNext();
  //   }
  // }

  changeSlide(prevOrNext: number): void {
    if (!this.swiperRef || !this.swiperRef.nativeElement.swiper) {
      console.warn('Swiper is not yet initialized.');
      return;
    }
  
    if (prevOrNext === -1) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    } else {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
  
}


