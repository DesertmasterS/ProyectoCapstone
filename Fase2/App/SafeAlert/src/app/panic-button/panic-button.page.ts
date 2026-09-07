import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 1. Importamos solo los componentes que usamos en el HTML desde la versión standalone
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonBadge 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-panic-button',
  templateUrl: './panic-button.page.html',
  styleUrls: ['./panic-button.page.scss'],
  standalone: true,
  // 2. Registramos los componentes individualmente
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonContent, 
    IonBadge
  ]
})
export class PanicButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activarAlerta() {
    console.log('¡Alerta de pánico activada!');
  }

}