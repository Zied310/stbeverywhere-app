import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

export class SwiperComponent {

  swiperOptions = {
    pagination: { el: '.swiper-pagination', 
    clickable: true,
    renderBullet: function (index :number, className: string) {
      return null;
    } },
  };

}
