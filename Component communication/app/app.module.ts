import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './component-communication/sibling-communication/parent/parent.component';
import { Child1Component } from './component-communication/sibling-communication/parent/child1/child1.component';
import { Child2Component } from './component-communication/sibling-communication/parent/child2/child2.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { SiblingCommunicationComponent } from './component-communication/sibling-communication/sibling-communication.component';
import { ChildToParentComponent } from './component-communication/child-to-parent/child-to-parent.component';
import { Parent1Component } from './component-communication/child-to-parent/parent1/parent1.component';
import { Child11Component } from './component-communication/child-to-parent/parent1/child11/child11.component';
import { ParentToChildComponent } from './component-communication/parent-to-child/parent-to-child.component';
import { Child22Component } from './component-communication/parent-to-child/parent11/child22/child22.component'
import { Parent11Component} from './component-communication/parent-to-child/parent11/parent11.component';
import { NonDependentComponent } from './component-communication/non-dependent/non-dependent.component';
import { Independent1Component } from './component-communication/non-dependent/independent1/independent1.component';
import { Independent2Component } from './component-communication/non-dependent/independent2/independent2.component';
import { Independent11Component } from './component-communication/non-dependent/independent1/independent11/independent11.component';
import { Independent22Component } from './component-communication/non-dependent/independent2/independent22/independent22.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ComponentCommunicationComponent,
    SiblingCommunicationComponent,
    ChildToParentComponent,
    Parent1Component,
    Child11Component,
    ParentToChildComponent,
    Child22Component,
    Parent11Component,
    NonDependentComponent,
    Independent1Component,
    Independent2Component,
    Independent11Component,
    Independent22Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
