import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardListComponent} from '../card-list/card-list.component';
import {TaskFormComponent} from '../task-form/task-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CardListComponent,
    TaskFormComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
  ],
})
export class CardModule { }
