import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  constructor() {
  }

  getCards() {
    return of([{}]);
  }
}
