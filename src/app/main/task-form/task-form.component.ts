import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CardCollectorModel} from '../models/card-collector.model';
import {NbDialogRef} from '@nebular/theme';
import {TaskNewModel} from '../models/task-new.model';

@Component({
  selector: 'ngx-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {

  form = new FormControl();
  cardCollectorModels: CardCollectorModel[];

  constructor(protected ref: NbDialogRef<TaskFormComponent>) {
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
