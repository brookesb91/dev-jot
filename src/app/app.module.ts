import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HighlightJsModule } from 'ngx-highlight-js';

import { EditorModule } from './editor';
import { SharedModule } from './shared';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EditorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
