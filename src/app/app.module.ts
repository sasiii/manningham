import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialcomponentsModule } from './materialcomponents';
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ManSampleCompComponent } from './man-sample-comp/man-sample-comp.component';
import { TypographyComponent } from './typography/typography.component';
import { HttpClientModule } from '@angular/common/http';
import { ManMainComponent } from './man-main/man-main.component';
import { ManHeaderComponent } from './man-header/man-header.component';



const appRoutes: Routes = [
  { path: '', component: ManSampleCompComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'man-main', component: ManMainComponent },
  { path: 'man-header', component: ManHeaderComponent },

  // { path: '', redirectTo: './man-sample-comp', pathMatch: 'full' },
  // { path: '**', redirectTo: './man-sample-comp', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ManSampleCompComponent,
    TypographyComponent,
    ManMainComponent,
    ManHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    MaterialcomponentsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
