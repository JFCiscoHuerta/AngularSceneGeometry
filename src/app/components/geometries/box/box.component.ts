import { GeometryService } from './../../../shared/services/geometry.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { Geometry } from '../../../shared/models/geometry.model';
import { IScene } from '../../../shared/models/scene.model';
import { BaseGeometryComponent } from '../base-geometry/base-geometry.component';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent extends BaseGeometryComponent {

  constructor(geometryService: GeometryService) {
    super(geometryService);
  }

  protected override createGeometry(): Geometry {
    return new Geometry(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    )
  }

}
