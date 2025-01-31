import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { GeometriesRoutingModule } from './geometries-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoxComponent,
    GeometriesRoutingModule
  ],
  exports: [
    BoxComponent
  ]
})
export class GeometriesModule { }
