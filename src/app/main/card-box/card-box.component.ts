import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../models/card.model';

@Component({
  selector: 'ngx-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss'],
})
export class CardBoxComponent implements OnInit {
  @Input() selected: boolean;
  @Input() card: CardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
