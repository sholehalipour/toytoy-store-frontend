import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slide } from './models/slide';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-slideshow',
  imports: [MatButtonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent {
  slideIndex: number = 1;
  intervalid: any;

  Slides: slide[] = [
    { imageurl: 'slidshow3.jpg', title: 'یه دنیای جدید از مد وسورپرایز', price: 'fgbf' },
    { imageurl: 'slidshow4.jpg', title: 'تفنگ های NerfوX-shot', price: 'fgbf' },
    { imageurl: 'slidshow5.jpg', title: 'اوج هیجان در سری جدید پوکمون!', price: 'fgbf' },
    { imageurl: 'slidshow6.jpg', title: 'بی بلید x نبردی فراتر از سرعت!', price: 'fgbf' },
    { imageurl: 'slidshow7.jpg', title: 'کلکسیونی از محبوبترین لحظات فوتبال', price: 'fgbf' },
    { imageurl: 'slidshow8.jpg', title: 'کاراکترهای محبوبتون در یک قدمی شماست', price: 'fgbf' },
    { imageurl: 'slidshow9.jpg', title: 'تجربه ایی جدید از ساخت با لگو', price: 'fgbf' },
  ];
  startautoslide(): void {
    this.intervalid = setInterval(() => {
      this.plusSlides(1);
    }, 3000)
  }
  ngOnInit(): void {
    this.startautoslide();
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalid);
  }

  plusSlides(n: number): void {
    this.slideIndex += n;
    if (this.slideIndex > this.Slides.length) this.slideIndex = 1;
    if (this.slideIndex < 1) this.slideIndex = this.Slides.length;

  }


  currentSlide(n: number): void {
    this.slideIndex = n;
  }

}