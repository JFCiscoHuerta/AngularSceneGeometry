import * as THREE  from 'three';
import { Component } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { GeometryService } from '../../../shared/services/geometry.service';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';

@Component({
  selector: 'app-cone',
  imports: [],
  templateUrl: './cone.component.html',
  styleUrl: './cone.component.css'
})
export class ConeComponent extends BaseGeometryComponent {

  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.ConeGeometry(1, 2, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
