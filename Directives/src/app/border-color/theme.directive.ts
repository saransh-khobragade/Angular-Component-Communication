import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective {

  constructor(private ele:ElementRef,private render:Renderer) 
  {
    this.render.setElementStyle(ele.nativeElement,'border','1px solid black')
   }

}
