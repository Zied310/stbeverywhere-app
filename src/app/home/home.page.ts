import {
  Component,
  ViewEncapsulation,
  AfterContentChecked,
  ViewChild,
} from '@angular/core';
import { SwiperComponent} from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, {Virtual, Pagination } from 'swiper';

import Swiper from 'swiper';



SwiperCore.use([Pagination]);
SwiperCore.use([Virtual]);



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})



export class HomePage implements AfterContentChecked{

  @ViewChild(SwiperComponent) swiperComponent!: SwiperComponent;

  


  activeIndex: number = 0;
  isEnd = false;


  config: SwiperOptions = {
    observer: true,
    observeParents: true,
    parallax:true,
    pagination: true,
  };
  
 
  

  ngAfterContentChecked() {
    if (this.swiperComponent) {
      this.swiperComponent.updateSwiper({});
      
    }
    
  }




  ngAfterViewInit() {

    // Listen for the slideChange event of the Swiper component
    this.swiperComponent.swiperRef.on('slideChange', () => {
      // Update the active index
      console.log(this.swiperComponent.swiperRef.isEnd, " slide");
      this.isEnd = this.swiperComponent.swiperRef.isEnd;
      this.activeIndex = this.swiperComponent.swiperRef.realIndex;
      console.log(this.swiperComponent.swiperRef.realIndex);
    });
    
  }



  
  NextSlide() {
      this.swiperComponent.swiperRef.slideNext(500);
  }
  PreviousSlide() {
    this.swiperComponent.swiperRef.slidePrev(500);
}
constructor() {}




 
  public cards = [
    {
      image: '../../assets/img/digicarte.png',
      title: 'Digicarte',
      content: `1- Caractéristiques :
    DigiCarte est une application gratuite, développée par La STB, qui vous permet de gérer vos différentes cartes bancaires à distance.


    2- Descriptif complet:
    - Vous informer sur toutes vos cartes STB (toute information relative aux cartes sera disponible)
    - Suivre vos opérations monétiques (TPE, GABs),
    - Consulter votre plafond restant suite à chaque opération de retrait,
    - Augmenter temporairement vos plafonds,
    - Bloquer ou débloquer votre carte à distance,
    - Consulter et déléguer vos cartes prépayées,
    - Recharger des cartes prépayées à partir de votre Compte chèque ou d’une autre carte prépayée, et ce en insérant soit le numéro ou le QR code de la carte prépayée à recharger,
    - Gérer vos dépenses,
    - Bénéficier de l’attestation de voyage sans vous déplacer à l’agence,
    - Géolocaliser les GABs STB.
    Avec DigiCarte vous pouvez jouir des meilleurs services de gestion des cartes nationales et internationales en toute sécurité.


    3- Eligibilité:
    DigiCarte est accessible aux particuliers comme aux professionnels.`,
    },
    {
      image: '../../assets/img/digiepargne.png',
      title: 'DigiEpargne',
      content: `1- Caractéristiques :
    DigiEpargne est une application simple téléchargeable gratuitement, permettant le suivi de votre compte Epargne à tout moment.

    
    2- Descriptif complet :
    Cette application vous permet de :
    - Consulter le solde de votre compte Epargne en temps réel,
    - Suivre les dernières opérations de votre compte épargne,
    - Consulter l’extrait de votre compte épargne,
    - Epargner les excédents de votre compte chèque,
    - Bloquer et débloquer votre compte épargne.


    3- Eligibilité :
    DigiEpargne est accessible aux particuliers comme aux professionnels ayant un compte Epargne.`,
    },
    {
      image: '../../assets/img/digicredit.png',
      title: 'DigiCredit',
      content: `1- Caractéristiques :
    DigiCrédit est une application simple téléchargeable gratuitement sur Play Store ou Apple Store, permettant le suivi de vos crédits (anciens et demandes en cours).
    
    
    2- Descriptif complet :
    Cette application vous permet de :
    - Simuler un crédit,
    - Etude d’éligibilité,
    - Suivre avec toute transparence les différentes étapes de décision (demande en cours),
    - Suivre l’encours des crédits,
    - Consulter les échéances écoulées et celles restantes.
    
    
    3- Eligibilité :
    DigiCrédit est accessible à toute personne souhaitant bénéficier d’un crédit ou ayant un crédit en cours à la STB.`,
    },
    {
      image: '../../assets/img/digitransfert.png',
      title: 'DigiTransfert',
      content: `1- Caractéristiques :
    DigiTransfert est une application mobile téléchargeable gratuitement, permettant la gestion et le pilotage des opérations de transfert scolarité à distance et en toute sécurité.
    
    
    2- Descriptif complet:
    Cette application permet de :
    - Consulter tous les détails relatifs au dossier scolarité,
    - Simuler le coût du transfert,
    - Effectuer l’ordre du transfert à distance,
    - Recevoir une copie du Swift instantanément,
    - Être alerté sur le statut du dossier,
    - Suivre les mouvements effectués relatifs au dossier scolarité,
    - Suivre le tracking du dossier effectué.
    
    
    3- Eligibilité:
    DigiTransfert est destinée à toute personne ayant en charge un dossier de scolarité d’un étudiant tunisien ou étranger résident poursuivant ses études à l’étranger.`,
    },
    {
      image: '../../assets/img/digiopa.png',
      title: 'DigiOPA',
      content: `1- Caractéristiques :
      DigiOPA est une application mobile téléchargeable gratuitement, permettant de gérer et de suivre l’ensemble de vos dossiers OPA par compte.
      
      
      2- Descriptif complet :
      Cette application permet de :
      - Consulter tous les détails relatifs à vos dossiers OPA (détails) par compte
      - Recevoir instantanément l’avis d’arrivé des fonds et du mail de négociation
      - Consulter et télécharger des fichiers (l’attestation de rapatriement cx5, avis du client, Copie du Swift, avis de crédit, imputation compte ava…)
      - Consulter et suivre toutes les étapes du traitement du dossier OPA (les instructions choisies par le client, les différents fichiers, …)
      
      
      3- Eligibilité :
      DigiOPA est accessible à toute personne physique résidente en Tunisie, ou toute personne morale tunisienne ou étrangère pour ses établissements en Tunisie.`,
    },
    {
      image: '../../assets/img/digiopa.png',
      title: 'DigiOPD',
      content: `1- Caractéristiques :
      DigiOPD est une application simple téléchargeable gratuitement, permettant le suivi et la gestion de vos dossiers OPD.
      
      
      2- Descriptif complet :
      Cette application permet de :
      - Consulter tous les détails relatifs à vos dossiers OPD par compte ;
      - Consulter et télécharger des fichiers (avis d’opération, Copie du Swift,…),
      - Consulter et suivre toutes les étapes du dossier OPD (les instructions choisies par le client, les différents fichiers, …),
      - Suivi du tracking de l’opération de transfert émis.
      
      
      3- Eligibilité :
      DigiOPD est accessible à toute personne physique résidente en Tunisie, ou toute personne morale tunisienne ou étrangère pour ses établissements en Tunisie.`,
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
