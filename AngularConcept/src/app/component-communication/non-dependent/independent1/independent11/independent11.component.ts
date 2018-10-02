import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-independent11',
  templateUrl: './independent11.component.html',
  styleUrls: ['./independent11.component.css']
})
export class Independent11Component implements OnInit {

  constructor(private comm:CommunicationService) { }

  ngOnInit() {
  }

  send(){
    this.comm.changeMessage("independent11 called")
  }
}
