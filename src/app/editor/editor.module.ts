import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { EditorComponent } from './editor.component';
import { EditorWindowComponent } from './editor-window';
import { EditorPreviewComponent } from './editor-preview';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  declarations: [
    EditorComponent,
    EditorWindowComponent,
    EditorPreviewComponent,
  ],
  imports: [SharedModule, EditorRoutingModule],
  exports: [],
  providers: [],
})
export class EditorModule { }
