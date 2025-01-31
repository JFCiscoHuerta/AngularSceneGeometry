import { GeometryService } from './../../../shared/services/geometry.service';
import { Component } from '@angular/core';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { Geometry } from '../../../shared/models/geometry.model';
import * as THREE from 'three';

@Component({
  selector: 'app-icosahedron',
  imports: [],
  templateUrl: './icosahedron.component.html',
  styleUrl: './icosahedron.component.css'
})
export class IcosahedronComponent extends BaseGeometryComponent {

  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 }));
  }

}
