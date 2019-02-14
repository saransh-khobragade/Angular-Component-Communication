import { Directive ,ElementRef,Renderer,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor ='grey';
  @Input('highlight') highlightColor;

  private backgroundColor=this.defaultColor;

  @HostListener('mouseenter') mouseinsde(){
    this.backgroundColor=this.highlightColor;
  };
  @HostListener('mouseleave') mouseoutside(){
    this.backgroundColor=this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get color(){
    return this.backgroundColor;  //intialise with grey color
  }
  
  
  constructor(private elementRef:ElementRef,private renderer: Renderer){
    //this.elementRef.nativeElement.style.background='blue';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','blue');
 }

}
