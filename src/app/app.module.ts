/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule, NbInputModule,
  NbMenuModule, NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {CardListComponent} from './main/card-list/card-list.component';
import { CardBoxComponent } from './main/card-box/card-box.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DialogNamePromptComponent} from './main/dialog-name-prompt/dialog-name-prompt.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    CardListComponent,
    CardBoxComponent,
    DialogNamePromptComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
