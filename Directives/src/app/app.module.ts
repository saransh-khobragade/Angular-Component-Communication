import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives/directives.component'
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AppComponent } from './app.component';
import { MyhiddenDirectiveComponent } from './myhidden-directive/myhidden-directive.component';
import { MyHiddenDirective } from './myhidden-directive/my-hidden.directive';
import { BorderColorComponent } from './border-color/border-color.component';
import { ThemeDirective } from './border-color/theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    MyhiddenDirectiveComponent,
    MyHiddenDirective,
    BorderColorComponent,
    ThemeDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
