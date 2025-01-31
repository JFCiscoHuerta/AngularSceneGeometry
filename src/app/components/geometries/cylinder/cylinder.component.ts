import * as THREE from 'three';
import { GeometryService } from './../../../shared/services/geometry.service';
import { Component } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';

@Component({
  selector: 'app-cylinder',
  imports: [],
  templateUrl: './cylinder.component.html',
  styleUrl: './cylinder.component.css'
})
export class CylinderComponent extends BaseGeometryComponent {

  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.CylinderGeometry(1.5, 1.5, 1, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
