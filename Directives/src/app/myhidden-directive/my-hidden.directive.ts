import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[IfUserAlive]'
})
export class MyHiddenDirective implements OnChanges{

  @Input() IfUserAlive:boolean

  constructor(private ele:ElementRef,private render:Renderer) {    
   }

   ngOnChanges(){
    
    console.log(this.IfUserAlive)
    if(this.IfUserAlive)  {
      this.render.setElementStyle(this.ele.nativeElement,'display','none')
    }
    else{
      this.render.setElementStyle(this.ele.nativeElement,'display','block')
    } 
   }

}
