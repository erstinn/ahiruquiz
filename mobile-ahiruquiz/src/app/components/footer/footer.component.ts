import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import type {User} from "../../../stories/user";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class FooterComponent implements OnInit {

  constructor() { }

  alertButtons = ['Action'];

  ngOnInit() {}

  count = signal('');

  @Input()
  user = signal('abc');

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();}
