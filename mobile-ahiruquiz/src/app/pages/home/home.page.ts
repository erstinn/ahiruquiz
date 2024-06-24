import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import { star } from 'ionicons/icons';
import {addIcons} from "ionicons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FooterComponent, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonIcon],
})
export class HomePage {

  constructor() {
    addIcons({ star })
  }

  memberInfo = {
    name: 'Aaron Saunders',
    title: 'CEO',
    companyName: 'Clearly Innovative Inc',
    bio: 'No news',
    // twitter: string;
    // linkedIn: string;
    website: 'www.clearlyinnovative.com',
  };
}
