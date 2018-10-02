import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent11',
  templateUrl: './parent11.component.html',
  styleUrls: ['./parent11.component.css']
})
export class Parent11Component implements OnInit {

  parentMessage = "Parent said hey"

  constructor() { }

  ngOnInit() {
  }

}
