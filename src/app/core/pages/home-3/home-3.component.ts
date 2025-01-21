import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

@Component({
  selector: 'app-home-3',
  standalone: true,
  imports: [],
  templateUrl: './home-3.component.html',
  styleUrl: './home-3.component.scss'
})
export class Home3Component implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperContainer!: ElementRef;

  // Initialize Swiper instance
  private swiper!: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    // Register Swiper modules
    Swiper.use([Pagination]);

    // Initialize Swiper
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true, // Enable looping
    });
  }
}
