import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Carte } from './carte'

@Directive({
  selector: '[appCarte]'
})
export class CarteDirective implements OnChanges {

  @Input() color: string
  @Input() selected: boolean

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected'].currentValue === 'true')
      this.el.nativeElement.style.backgroundColor = this.color
    else
      this.el.nativeElement.style.backgroundColor = 'initial'
  }

}
