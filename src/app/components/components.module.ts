import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card/header-card.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [HeaderCardComponent, CardComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderCardComponent, 
    CardComponent,
  ]
})
export class ComponentsModule { }
