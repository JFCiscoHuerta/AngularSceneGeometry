import { ColorService } from './../../../shared/services/color.service';
import { GeometryService } from './../../../shared/services/geometry.service';
import { Component } from '@angular/core';
import * as THREE from 'three';
import { Geometry } from '../../../shared/models/geometry.model';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';

/**
 * Component representing a 3D box geometry.
 * Extends `BaseGeometryComponent` to handle scene initialization and rendering.
 */
@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent extends BaseGeometryComponent {

  /**
   * Creates an instance of `BoxComponent`.
   * @param {GeometryService} geometryService  - Service responsible for managing the 3D scene.
   * @param {ColorServiceService} colorService  - Service responsible for managing the color.
   */
  constructor(geometryService: GeometryService, colorService: ColorService) {
    super(geometryService, colorService);
  }

  /**
   * Overrides the abstract method to create a box geometry.
   * @returns A `Geometry` instance with a cube shape and semi-transparent gray material.
   */
  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    )
  }

}
