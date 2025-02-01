import { Component } from '@angular/core';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { GeometryService } from '../../../shared/services/geometry.service';
import { Geometry } from '../../../shared/models/geometry.model';
import * as THREE from 'three';

/**
 * Component representing a 3D plane geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-plane',
  imports: [],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.css'
})
export class PlaneComponent extends  BaseGeometryComponent {

  /**
   * Creates an instance of `PlaneComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   */
  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  /**
   * Overrides the abstract method to create a plane geometry.
   * @returns A `Geometry` instance with a plane shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.PlaneGeometry(3, 3, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
