import { GeometryService } from './../../../shared/services/geometry.service';
import { Component } from '@angular/core';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { Geometry } from '../../../shared/models/geometry.model';
import * as THREE from 'three';

/**
 * Component representing a 3D icosahedron geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-icosahedron',
  imports: [],
  templateUrl: './icosahedron.component.html',
  styleUrl: './icosahedron.component.css'
})
export class IcosahedronComponent extends BaseGeometryComponent {

  /**
   * Creates an instance of `IcosahedronComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   */
  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  /**
   * Overrides the abstract method to create a icosahedron geometry.
   * @returns A `Geometry` instance with a icosahedron shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 }));
  }

}
