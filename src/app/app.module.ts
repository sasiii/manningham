import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialcomponentsModule } from './materialcomponents';
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ManSampleCompComponent } from './man-sample-comp/man-sample-comp.component';
import { TypographyComponent } from './typography/typography.component';



const appRoutes: Routes = [
  { path: '/typography', component: TypographyComponent },

  { path: '', redirectTo: '/man-sample-comp', pathMatch: 'full' },
  { path: '**', redirectTo: '/man-sample-comp', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ManSampleCompComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialcomponentsModule,
    // RouterModule.forRoot(appRoutes),

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
