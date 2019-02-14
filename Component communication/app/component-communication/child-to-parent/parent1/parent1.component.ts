import { Component, OnInit,ViewChild, OnChanges } from '@angular/core';
import { Child11Component } from './child11/child11.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  message:string

  @ViewChild(Child11Component) child;

  constructor() { }

  ngOnInit() {
    this.message = this.child.message
  }



}
