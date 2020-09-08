import {CardModel} from './card.model';

export class CardCollectorModel {
  constructor(public title: string, public cards: CardModel[]) { }
}
