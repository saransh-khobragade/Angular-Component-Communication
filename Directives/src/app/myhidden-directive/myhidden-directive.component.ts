import { Directive,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhidden-directive',
  templateUrl: './myhidden-directive.component.html',
  styleUrls: ['./myhidden-directive.component.css']
})
export class MyhiddenDirectiveComponent implements OnInit {

  userAlive:boolean

  constructor() {
    
   }

  ngOnInit() {
    this.userAlive=true
  }
  clickToHide(){
    this.userAlive=!this.userAlive
  }

}
