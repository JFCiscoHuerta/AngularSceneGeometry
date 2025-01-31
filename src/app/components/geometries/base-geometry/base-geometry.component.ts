import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { GeometryService } from '../../../shared/services/geometry.service';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

@Component({
  selector: 'app-base-geometry',
  imports: [],
  templateUrl: './base-geometry.component.html',
  styleUrl: './base-geometry.component.css'
})
export abstract class BaseGeometryComponent {

  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  protected geometry!: Geometry;

  constructor(protected geometryService: GeometryService) {}

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.geometryService.initScene(this.canvasContainer.nativeElement);
    this.geometry = this.createGeometry();

    const { scene, camera, renderer } = this.geometryService.getSceneData();
    scene.add(this.geometry.mesh);

    if (this.geometryService.isWebGL2Available()) {
      this.geometryService.animate(scene, camera, renderer, this.geometry.mesh);
    } else {
      const warning = WebGL.getErrorMessage;
      this.canvasContainer.nativeElement.appendChild(warning);
    }
  }

  protected abstract createGeometry(): Geometry;

}
