import { NgModule } from '@angular/core'
import { CarteComponent } from './carte.component';
import { CarteDirective } from '../carte.directive';
import { MaterialModule } from '@angular/material'

@NgModule({
  declarations: [CarteComponent, CarteDirective],
  imports:[MaterialModule.forRoot()],
  exports: [CarteComponent]
})

export class CarteModule { }