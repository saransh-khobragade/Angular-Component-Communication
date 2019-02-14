import { Component, OnInit, OnChanges } from '@angular/core';
import { CommunicationService } from '../../communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-independent22',
  templateUrl: './independent22.component.html',
  styleUrls: ['./independent22.component.css']
})
export class Independent22Component implements OnInit ,OnChanges{

  message:string
  
  constructor(private comm:CommunicationService) { }

  ngOnInit() {
    this.comm.currentMessage.subscribe(data => this.message = data)
  }
  ngOnChanges(){
  }

}
