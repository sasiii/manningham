import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialcomponentsModule } from './materialcomponents';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { ManSampleCompComponent } from './man-sample-comp/man-sample-comp.component';
import { TypographyComponent } from './typography/typography.component';



const appRoutes: Routes = [
  { path: 'typography', component: TypographyComponent}
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
    RouterModule.forRoot(appRoutes),
    MaterialcomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
