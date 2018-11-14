import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialcomponentsModule } from './materialcomponents';

import { AppComponent } from './app.component';
import { ManSampleCompComponent } from './man-sample-comp/man-sample-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ManSampleCompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialcomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
