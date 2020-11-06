import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExergue]'
})
export class ExergueDirective {

  private colors = [
    'red',
    'orange',
    'yellow',
    'green' ,
    'blue',
    'indigo',
    'purple'
  ];

  @HostBinding('style.color') color ;
  @HostBinding('style.borderColor') borderColor ;

  @HostListener('keydown') onKeyDown(){
    this.color = this.colors[Math.floor(Math.random() * 7)] ;
    this.borderColor = this.colors[Math.floor(Math.random() * 7)] ;
  }



  constructor() { }

}
