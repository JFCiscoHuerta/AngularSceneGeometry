import { Component } from '@angular/core';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { GeometryService } from '../../../shared/services/geometry.service';
import { Geometry } from '../../../shared/models/geometry.model';
import * as THREE from 'three';
import { ColorService } from '../../../shared/services/color.service';

/**
 * Component representing a 3D sphere geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-sphere',
  imports: [],
  templateUrl: './sphere.component.html',
  styleUrl: './sphere.component.css'
})
export class SphereComponent extends BaseGeometryComponent {

  /**
   * Creates an instance of `SphereComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   * @param {ColorService} colorService  - Service responsible for managing the color.
   */
  constructor(geometryService: GeometryService, colorService: ColorService) {
    super(geometryService, colorService);
  }

  /**
   * Overrides the abstract method to create a sphere geometry.
   * @returns A `Geometry` instance with a sphere shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 }));
  }

}
