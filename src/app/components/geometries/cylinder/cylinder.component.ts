import * as THREE from 'three';
import { GeometryService } from './../../../shared/services/geometry.service';
import { Component } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';
import { ColorService } from '../../../shared/services/color.service';

/**
 * Component representing a 3D cylinder geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-cylinder',
  imports: [],
  templateUrl: './cylinder.component.html',
  styleUrl: './cylinder.component.css'
})
export class CylinderComponent extends BaseGeometryComponent {

  /**
   * Creates an instance of `CylinderComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   * @param {ColorService} colorService  - Service responsible for managing the color.
   */
  constructor(geometryService: GeometryService, colorService: ColorService) {
    super(geometryService, colorService);
  }

  /**
   * Overrides the abstract method to create a cylinder geometry.
   * @returns A `Geometry` instance with a cylinder shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.CylinderGeometry(1.5, 1.5, 1, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );
  }

}
