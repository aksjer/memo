import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { CarteModule } from '../carte/carte.module'
import { PaquetComponent } from './paquet.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PaquetComponent],
  imports: [MaterialModule.forRoot(), CarteModule, CommonModule],
  exports: [PaquetComponent]
})

export class PaquetModule { }