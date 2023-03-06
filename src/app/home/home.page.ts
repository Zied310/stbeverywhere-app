import { Component, ViewEncapsulation, AfterContentChecked, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions} from 'swiper';
import SwiperCore , {Pagination} from 'swiper';


SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})




export class HomePage implements AfterContentChecked { 

@ViewChild('swiper') swiper!: SwiperComponent;

  config: SwiperOptions = {
    pagination: true,

  }
  constructor() {}

  ngAfterContentChecked() {
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
}


public cards = [
  {
    image: '../../assets/img/digicarte.png',
    title: 'Digicarte',
    content: 'this is the content of this card',
  },
  {
    image: '../../assets/img/digiepargne.png',
    title: 'DigiEpargne',
    content: 'This is the DigiEpargne content',
  },
  {
    image: '../../assets/img/digicredit.png',
    title: 'DigiCredit',
    content: 'This is the DigiCredit content',
  },
  {
    image: '../../assets/img/digitransfert.png',
    title: 'DigiTransfert',
    content: 'This is the DigiTransfert content',
  },
  {
    image: '../../assets/img/digiopa.png',
    title: 'DigiOPA',
    content: 'This is the DigiOPA content',
  },
  {
    image: '../../assets/img/digiopa.png',
    title: 'DigiOPD',
    content: 'This is the DigiOPD content',
  },
];

public selectedCard: any = null;

  public showCard(card: any): void {
    this.selectedCard = card;
  }

  public hideCard(): void {
    this.selectedCard = null;
  }

}
