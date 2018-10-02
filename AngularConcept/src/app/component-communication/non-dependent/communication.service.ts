import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private message = new Subject<string>();
  currentMessage = this.message.asObservable();

  constructor() { }

  changeMessage(value:string){
    this.message.next(value)
  }

}
