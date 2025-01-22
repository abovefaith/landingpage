import { NgIf } from '@angular/common';
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-5',
  standalone: true,
  imports: [MatIconModule, NgIf],
  templateUrl: './home-5.component.html',
  styleUrls: ['./home-5.component.scss'],
})
export class Home5Component implements AfterViewInit {
  dark: boolean = false;
  toggleBtn!: HTMLElement;
  bigWrapper!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.declare();
    this.events();
  }

  declare() {
    // Access DOM elements
    const element = this.el.nativeElement;
    this.toggleBtn = element.querySelector('.toggle-btn');
    this.bigWrapper = element.querySelector('.big-wrapper');
  }

  toggleAnimation() {
    this.dark = !this.dark; // Toggle dark mode state
    if (this.dark) {
      this.bigWrapper.classList.remove('light');
      this.bigWrapper.classList.add('dark');
    } else {
      this.bigWrapper.classList.remove('dark');
      this.bigWrapper.classList.add('light');
    }
  }

  events() {
    this.toggleBtn.addEventListener('click', () => this.toggleAnimation());
  }
}
