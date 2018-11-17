import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { MaterialModule } from './layout';


const MODULES = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  ClipboardModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class SharedModule { }
