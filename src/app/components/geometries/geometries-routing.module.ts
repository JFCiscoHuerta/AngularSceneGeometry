import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { ConeComponent } from './cone/cone.component';
import { CylinderComponent } from './cylinder/cylinder.component';

const routes: Routes = [
  {path: 'box', component: BoxComponent},
  {path: 'cone', component: ConeComponent},
  {path: 'cylinder', component: CylinderComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GeometriesRoutingModule { }
