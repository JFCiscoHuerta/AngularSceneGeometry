import { Component } from '@angular/core';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { GeometryService } from '../../../shared/services/geometry.service';
import { Geometry } from '../../../shared/models/geometry.model';
import * as THREE from 'three';

@Component({
  selector: 'app-plane',
  imports: [],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.css'
})
export class PlaneComponent extends  BaseGeometryComponent {

  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.PlaneGeometry(3, 3, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
