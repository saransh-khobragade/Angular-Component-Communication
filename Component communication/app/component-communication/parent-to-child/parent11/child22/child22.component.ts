import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.css']
})
export class Child22Component implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
