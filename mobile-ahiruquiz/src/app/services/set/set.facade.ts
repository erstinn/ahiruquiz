import {inject, Injectable} from '@angular/core';
import {SetService} from "./set.service";

@Injectable({
  providedIn: 'root'
})
export class SetFacade {
  // workflow getSets : get user > get sets of the user > given set id get quizzes under said set
  // workflow duplicateSet:  get user > get sets of the user > given set id get quizzes under said set >

  constructor() { }

  setService = inject(SetService);

}
