import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormControl} from '@angular/forms';
import {CardCollectorModel} from '../models/card-collector.model';
import {TaskNewModel} from '../models/task-new.model';

@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent implements OnInit {

  form = new FormControl();
  public cardCollectorModels: CardCollectorModel[];

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.cardCollectorModels[0]);
  }


  cancel() {
    this.ref.close();
  }

  submit(taskName: string) {
    this.ref.close(new TaskNewModel(taskName, this.form.value));
  }
}
