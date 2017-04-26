import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appVibrate]'
})
export class VibrateDirective {

  constructor() { }

  @Input('appVibrate') appVib: HostListener;

  @HostListener('click') Click(){
    this.vibrateFunction();
  }

  vibrateFunction(){
    console.log('vibrate');
    navigator.vibrate(500);
  }

}
