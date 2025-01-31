import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { GeometriesRoutingModule } from './geometries-routing.module';
import { CylinderComponent } from './cylinder/cylinder.component';
import { ConeComponent } from './cone/cone.component';
import { IcosahedronComponent } from './icosahedron/icosahedron.component';
import { PlaneComponent } from './plane/plane.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoxComponent,
    ConeComponent,
    CylinderComponent,
    IcosahedronComponent,
    PlaneComponent,
    GeometriesRoutingModule
  ],
  exports: [
    BoxComponent,
    ConeComponent,
    CylinderComponent,
    IcosahedronComponent,
    PlaneComponent
  ]
})
export class GeometriesModule { }
