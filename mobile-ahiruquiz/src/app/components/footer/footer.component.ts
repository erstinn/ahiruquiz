import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import type {User} from "../../../stories/user";
import {IonicModule} from "@ionic/angular";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonIcon,
  IonItem
} from "@ionic/angular/standalone";
export interface MemberInfo {
  name: string;
  title: string;
  companyName?: string;
  bio: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonButton,
    IonIcon

  ],
  standalone: true
})
export class FooterComponent implements OnInit {

  constructor() { }

  alertButtons = ['Action'];

  ngOnInit() {}

  count = signal('');

  @Input() memberInfo!: MemberInfo;
  @Output()

  onClick = new EventEmitter<{ event: string; value: string | undefined }>

  @Input()
  user = signal('abc');

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();}
