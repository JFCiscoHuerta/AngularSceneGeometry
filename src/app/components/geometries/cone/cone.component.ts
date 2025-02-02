import * as THREE  from 'three';
import { Component } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { GeometryService } from '../../../shared/services/geometry.service';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { ColorService } from '../../../shared/services/color.service';

/**
 * Component representing a 3D cone geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-cone',
  imports: [],
  templateUrl: './cone.component.html',
  styleUrl: './cone.component.css'
})
export class ConeComponent extends BaseGeometryComponent {

  /**
   * Creates an instance of `ConeComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   * @param {ColorService} colorService  - Service responsible for managing the color.
   */
  constructor(geometryService: GeometryService, colorService: ColorService) {
    super(geometryService, colorService);
  }

  /**
   * Overrides the abstract method to create a cone geometry.
   * @returns A `Geometry` instance with a cone shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.ConeGeometry(1, 2, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
