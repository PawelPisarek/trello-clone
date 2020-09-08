import {Component} from '@angular/core';
import {CardCollectorModel} from '../models/card-collector.model';
import {CardModel} from '../models/card.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NbDialogService} from '@nebular/theme';
import {TaskNewModel} from '../models/task-new.model';
import {take} from 'rxjs/operators';
import {TaskFormComponent} from '../task-form/task-form.component';

@Component({
  selector: 'ngx-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {

  constructor(private dialogService: NbDialogService) {
  }

  allLists = [
    new CardCollectorModel('TODO', [
      new CardModel('Trello Clone'), new CardModel('Recipe Management App'), new CardModel('Brainstorm Group Project Ideas')]),
    new CardCollectorModel('IN PROGRESS', [
      new CardModel('DocGawk API'), new CardModel('ICE Raid Tracker'),
      new CardModel('Island Pie Pizza Website'), new CardModel('Keg Inventory System')]),
    new CardCollectorModel('TEST', [
      new CardModel('Professional Portfolio'), new CardModel('Personal Blog/Website'), new CardModel('Grocery Budgeting Tool')]),
    new CardCollectorModel('DONE', [
      new CardModel('Professional Portfolio'), new CardModel('Personal Blog/Website'), new CardModel('Grocery Budgeting Tool')]),
  ];
  allCards: Map<string, CardModel[]> = this.allLists.reduce((p, c) => {
    p.set(c.title, c.cards);
    return p;
  }, new Map());

  drop(event: CdkDragDrop<string>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.allCards.get(event.container.data), event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(this.allCards.get(event.previousContainer.data),
        this.allCards.get(event.container.data),
        event.previousIndex,
        event.currentIndex);
    }
  }

  addCard() {
    const dialogNamePromptComponentNbDialogRef = this.dialogService.open(TaskFormComponent);
    dialogNamePromptComponentNbDialogRef.componentRef.instance.cardCollectorModels = this.allLists;
    dialogNamePromptComponentNbDialogRef
      .onClose.pipe(take(1)).subscribe((name: TaskNewModel) => {
      if (name) {
        this.allCards.set(name.cardTitle.title, [
          ...this.allCards.get(name.cardTitle.title), new CardModel(name.taskName)]);
      }
    });
  }
}
