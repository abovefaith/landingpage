import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow } from 'swiper/modules';

// Register the Swiper modules
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow]);

@Component({
  selector: 'app-home-4',
  standalone: true,
  imports: [],
  templateUrl: './home-4.component.html',
  styleUrls: ['./home-4.component.scss'],
})
export class Home4Component implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperElement!: ElementRef;

  private swiperInstance!: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    this.swiperInstance = new Swiper(this.swiperElement.nativeElement, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });
  }
}
